import React, {Fragment} from 'react';
import {Div, FormLayout, FormLayoutGroup, Input, Placeholder} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Icon56LockOutline from '@vkontakte/icons/dist/56/lock_outline';
import Icon56UserAddOutline from '@vkontakte/icons/dist/56/user_add_outline';

const Authorization = ({go, type}) => {
	const onInput = (e) => {
		e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,4)
	};

	return (
		<Fragment>
			<PanelHeader>{type === 'login' ? 'Авторизация' : 'Регистрация'}</PanelHeader>
			<Placeholder
				icon={type === 'login' ? <Icon56LockOutline /> : <Icon56UserAddOutline />}
				header={'Введите пароль'}
			>
				<FormLayout>
					<FormLayoutGroup top={'Введите пароль'}>
						<Input name={'password'} type={'number'} onInput = {onInput} align="center"/>
					</FormLayoutGroup>
					{
						type !== 'login'
							?
							<FormLayoutGroup top={'Повторите пароль'}>
								<Input type={'number'} name={'confirm'} onInput = {onInput} align="center"/>
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
