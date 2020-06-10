import React, {Fragment, useState, useEffect, useContext} from 'react';
import {Div, FormLayout, Placeholder, FormStatus} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Icon56LockOutline from '@vkontakte/icons/dist/56/lock_outline';
import Icon56UserAddOutline from '@vkontakte/icons/dist/56/user_add_outline';
import useApi from "../hooks/useApi";
import {AppSignContext} from "../contexts/appSign";
import {CurrentUserContext} from "../contexts/currentUser";
import useLocalStorage from "../hooks/useLocalStorage";
import {RouterContext} from "../contexts/routerContext";
import Dialer from '../components/Dialer';

const Authorization = ({go, goView, type}) => {
	const [formError, setFormError] = useState(null);
	const [{response, error}, doApiFetch] = useApi(`/users/${type}`);
	const [{vkUserId}] = useContext(AppSignContext);
	const [startFetchData, setStartFetchData] = useState(false);
	const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext);
	const [, setToken] = useLocalStorage('token');
	const [state, dispatch] = useContext(RouterContext);

	useEffect(() => {
		if (!currentUserState.isLoggedIn) return;
		const {name, phone, email, password} = currentUserState.currentUser;
		if (!name || !phone || !email || !password) {
			dispatch({type: 'SET_VIEW', payload: { view: 'registration', panel: 'finish'}});
		} else {
			dispatch({type: 'SET_VIEW', payload: { view: 'balance', panel: 'home'}})
		}
	},[currentUserState, dispatch]);

	useEffect(()=>{
		if ((state.password.length !== state.confirmPassword.length) || (!state.password.length && !state.confirmPassword.length)) {
			setFormError(null);
			return;
		}

		if (state.password !== state.confirmPassword) {
			setFormError({status: 'Ошибка валидации', message: 'Пароли не совпадают. Проверьте ввод и повторите попытку.'});
		}
	}, [state.password, state.confirmPassword, type]);

	useEffect(()=>{
		if (!startFetchData) return;
		const body = {
			method: 'POST',
			user: {
				id: +vkUserId,
				password: state.password
			}
		};

		doApiFetch(body);
		setStartFetchData(false);
		dispatch({type: 'UNSET_PASSWORD'});
	},[startFetchData, doApiFetch, state.password, vkUserId]);

	useEffect(() => {
		if (!response) return;

		if (!response.user && response.error) {
			setFormError(response.error);
		} else {
			setToken(response.user.token);
		}
		setCurrentUserState(state => ({
			...state,
			isLoading: false,
			isLoggedIn: !!response.user,
			currentUser: response.user || null
		}));

	}, [response, setCurrentUserState, go, goView, setToken]);

	useEffect(() => {
		if (!error) return;
		setFormError({message: error.message});
	}, [error]);

	const formStatus = () => {
		if (!formError) return null;
		return (
			<FormStatus header={formError.status} mode="error">
				{formError.message}
			</FormStatus>
		)
	};

	const formButtonClick = async () => {
		setStartFetchData(true);
	};

	const loginPassString = state.password.replace(/[0-9]/g, '*') || 'Введите пароль'
	const confPassString = state.confirmPassword.replace(/[0-9]/g, '*') ||  'Повторите пароль'
	const digitCount = () => {
		let str;
		if (state.password.length !== 4) {
			str = state.password.length+' из 4';
		} else if (type==='login') {
			str = state.password.length+' из 4';
		} else {
			str = state.confirmPassword.length+' из 4';
		}
		// state.password.length !== 4 ? state.password.length+' из 4' : state.confirmPassword.length+' из 4'
		return str;
	}
	const headerString = () => {
		let str;
		if (state.password.length !== 4) {
			str = loginPassString;
		} else if (type==='login') {
			str = loginPassString;
		} else {
			str = confPassString;
		}
		return (<b>{str}</b>);
	}

	return (
		<Fragment>
			<PanelHeader>{type === 'login' ? 'Введите пароль' : 'Регистрация'}</PanelHeader>
			<Placeholder
				icon={type === 'login' ? <Icon56LockOutline /> : <Icon56UserAddOutline />}
				header={headerString()/*state.password.length !== 4 ? loginPassString : confPassString*/}
			>
				<FormLayout>
					{formStatus()}
				</FormLayout>
				{digitCount()}
			</Placeholder>
			<Dialer confirm={(state.password.length === 4)} />
			<FormLayout style={{textAlign: 'center'}}>
			{
				(type === 'login' && state.password.length === 4)
				&& 
					<Button size="xl" mode='commerce' onClick={formButtonClick}>{type === 'login' ? 'Авторизация' : 'Регистрация'}</Button>
			}
			{
				(type !== 'login' && state.password && state.confirmPassword && state.password === state.confirmPassword)
				&& 
				
					<Button mode='commerce' size="xl" onClick={formButtonClick}>{type === 'login' ? 'Авторизация' : 'Регистрация'}</Button>
				
			}
			</FormLayout>
			<Div>
				<Button
					stretched
					mode="tertiary"
					onClick={(e) => {
						dispatch({type: 'SET_PANEL', payload: { panel: e.currentTarget.dataset.to}});
					}}
					data-to={type === 'login' ? 'register' : 'login'}
				>{type === 'login' ? 'Регистрация' : 'Авторизация'}</Button>
			</Div>
		</Fragment>
	)
};

export default Authorization;
