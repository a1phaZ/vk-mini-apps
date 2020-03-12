import React, {Fragment, useState, useEffect, useContext} from 'react';
import {Div, FormLayout, FormLayoutGroup, Input, Placeholder, FormStatus} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Icon56LockOutline from '@vkontakte/icons/dist/56/lock_outline';
import Icon56UserAddOutline from '@vkontakte/icons/dist/56/user_add_outline';
import useApi from "../hooks/useApi";
import {AppSignContext} from "../contexts/appSign";
import {CurrentUserContext} from "../contexts/currentUser";
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';

const Authorization = ({go, type, loadIndicator}) => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [formError, setFormError] = useState(null);
	const [{response, error}, doApiFetch] = useApi(`/users/${type}`);
	const [{vkUserId}] = useContext(AppSignContext);
	const [startFetchData, setStartFetchData] = useState(false);
	const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext);

	useEffect(()=>{
		if (password.length !== confirmPassword.length) {
			setFormError(null);
			return;
		}

		if (password !== confirmPassword) {
			setFormError({header: 'Пароли не совпадают', text: 'Для продолжнения пароли должны совпадать'});
		}
	}, [password, confirmPassword]);

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
		if (!response || error) return;

		if (!response.user && response.errors) {
			setFormError(error);
		}
		setCurrentUserState(state => ({
			...state,
			isLoading: false,
			isLoggedIn: response.user ? true : false,
			currentUser: response.user
		}));

		loadIndicator(null);
	}, [response, setCurrentUserState, loadIndicator, error]);

	useEffect(() => {
		if (!error) return;

		setCurrentUserState(state => ({
			...state,
			isLoading: false,
			isLoggedIn: false,
			currentUser: null
		}));
		
		console.log(error);

		loadIndicator(null);
	});

	const onInput = (e) => {
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
			<FormStatus header={formError.header} mode="error">
				{formError.text}
			</FormStatus>
		)
	};

	const formButtonClick = async () => {
		setStartFetchData(true);
		loadIndicator(<ScreenSpinner size='large' />);
	};

	console.log({currentUserState});

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
						<Input name={'password'} type={'number'} onChange = {onInput} align="center" value={password}/>
					</FormLayoutGroup>
					{
						type !== 'login'
							?
							<FormLayoutGroup top={'Повторите пароль'}>
								<Input type={'number'} name={'confirmPassword'} onChange = {onInput} align="center" value={confirmPassword}/>
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
					onClick={go}
					data-to={type === 'login' ? 'authorization.registration' : 'authorization.login'}
				>{type === 'login' ? 'Нет пароля?' : 'Есть пароль?'}</Button>
			</Div>
		</Fragment>
	)
};

export default Authorization;
