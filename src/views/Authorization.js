import React, {Fragment, useState, useEffect} from 'react';
import {Div, FormLayout, FormLayoutGroup, Input, Placeholder, FormStatus} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Icon56LockOutline from '@vkontakte/icons/dist/56/lock_outline';
import Icon56UserAddOutline from '@vkontakte/icons/dist/56/user_add_outline';

const Authorization = ({go, type}) => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [formError, setFormError] = useState(null);

	useEffect(()=>{
		if (password.length !== confirmPassword.length) {
			setFormError(null);
			return;
		}

		if (password !== confirmPassword) {
			setFormError({header: 'Пароли не совпадают', text: 'Для продолжнения пароли должны совпадать'});
		}
	}, [password, confirmPassword]);

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

	return (
		<Fragment>
			<PanelHeader>{type === 'login' ? 'Авторизация' : 'Регистрация'}</PanelHeader>
			<Placeholder
				icon={type === 'login' ? <Icon56LockOutline /> : <Icon56UserAddOutline />}
				header={'Введите пароль'}
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
					<Button size="l">{type === 'login' ? 'Авторизация' : 'Регистрация'}</Button>
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
