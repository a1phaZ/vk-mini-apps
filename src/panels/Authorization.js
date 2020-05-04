import React, {Fragment, useState, useEffect, useContext} from 'react';
import {Div, FormLayout, FormLayoutGroup, Input, Placeholder, FormStatus} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Icon56LockOutline from '@vkontakte/icons/dist/56/lock_outline';
import Icon56UserAddOutline from '@vkontakte/icons/dist/56/user_add_outline';
import useApi from "../hooks/useApi";
import {AppSignContext} from "../contexts/appSign";
import {CurrentUserContext} from "../contexts/currentUser";
import useLocalStorage from "../hooks/useLocalStorage";
import {RouterContext} from "../contexts/routerContext";

const Authorization = ({go, goView, type}) => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [formError, setFormError] = useState(null);
	const [{response, error}, doApiFetch] = useApi(`/users/${type}`);
	const [{vkUserId}] = useContext(AppSignContext);
	const [startFetchData, setStartFetchData] = useState(false);
	const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext);
	const [, setToken] = useLocalStorage('token');
	const [,dispatch] = useContext(RouterContext);

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
		if (type === 'login') return;

		if ((password.length !== confirmPassword.length)) {
			setFormError(null);
			return;
		}

		if (password !== confirmPassword) {
			setFormError({status: 'Ошибка валидации', message: 'Пароли не совпадают. Проверьте ввод и повторите попытку.'});
		}
	}, [password, confirmPassword, type]);

	useEffect(()=>{
		if (!startFetchData) return;
		const body = {
			method: 'POST',
			user: {
				id: +vkUserId,
				password: password
			}
		};

		doApiFetch(body);
		setStartFetchData(false);
	},[startFetchData, doApiFetch, password, vkUserId]);

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
		setFormError(error);
	}, [error]);

	const onChange = (e) => {
		e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,4);
		if (e.target.name === 'password') {
			setPassword(e.target.value);
		} else {
			setConfirmPassword(e.target.value);
		}
	};

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

	return (
		<Fragment>
			<PanelHeader>{type === 'login' ? 'Авторизация' : 'Регистрация'}</PanelHeader>
			<Placeholder
				icon={type === 'login' ? <Icon56LockOutline /> : <Icon56UserAddOutline />}
				header={type === 'login' ? 'Введите пароль' : 'Придумайте пароль'}
			>
				<FormLayout>
					{formStatus()}
					<FormLayoutGroup top={'Введите пароль'}>
						<Input name={'password'} type={'number'} onChange = {onChange} align="center" value={password}/>
					</FormLayoutGroup>
					{
						type !== 'login'
							?
							<FormLayoutGroup top={'Повторите пароль'}>
								<Input type={'number'} name={'confirmPassword'} onChange = {onChange} align="center" value={confirmPassword}/>
							</FormLayoutGroup>
							:
						null
					}
					<Button size="l" onClick={formButtonClick}>{type === 'login' ? 'Авторизация' : 'Регистрация'}</Button>
				</FormLayout>
			</Placeholder>
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
