import React, {useState, useEffect, Fragment, useContext} from 'react';
import {
	FormLayout,
	IOS,
	PanelHeader,
	platform,
	PanelHeaderButton, Button, Input, FormLayoutGroup, FormStatus, Snackbar,
	Div
} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import bridge from "@vkontakte/vk-bridge";
import useApi from "../hooks/useApi";
import {CurrentUserContext} from "../contexts/currentUser";
import {RouterContext} from "../contexts/routerContext";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Icon16Done from '@vkontakte/icons/dist/16/done';

const Profile = () =>{
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');
	const [kktPassword, setKktPassword] = useState('');
	const [fetchToFns, setFetchToFns] = useState(false);
	const [canBack, setCanBack] = useState(true);
	const [snackbar, setSnackbar] = useState(null);
	const [fnsPasswordType, setFnsPasswordType] = useState('');
	const [{response}, doApiFetch] = useApi(`/users/profile`);
	const [fnsResponse, doFnsFetch] = useApi(`/fns/password`);
	const [startFetchData, setStartFetchData] = useState(false);
	const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext);
	const [, dispatch] = useContext(RouterContext);
	const osName = platform();

	useEffect(()=>{
		bridge.subscribe(({ detail: { type, data }}) => {
			switch (type) {
				case 'VKWebAppGetPersonalCardResult':
					setEmail(data.email);
					setPhone(data.phone);
					console.log('profile', data);
					break;
				case 'VKWebAppGetPersonalCardFailed':
					console.log('profile error', data);
					break;
				default:
					break;
			}
		});
	}, []);

	useEffect(() => {
		const { email, name, phone, password } = currentUserState.currentUser;
		setEmail(email || '');
		setName(name || '');
		setPhone(phone || '');
		setKktPassword(password || '');
		setCanBack(!!email && !!name && !!phone && !!password);
	}, [currentUserState]);

	useEffect(()=>{
		if (!startFetchData) return;
		const body = {
			method: 'PUT',
			update: {
				email,
				phone,
				name,
				kktPassword
			}
		};

		doApiFetch(body);
		setStartFetchData(false);
	},[startFetchData, doApiFetch, email, phone, name, kktPassword]);

	useEffect(() => {
		if (!fetchToFns) return;
		let body = {};

		if (fnsPasswordType !== 'restore') {
			body.name = name;
			body.email = email;
		}

		body.params = {
			type: fnsPasswordType
		};

		body.phone = phone.replace(/[ ()-]/g, '');
		body.phone = body.phone.replace(/^[8]/g, '+7');
		body.method = 'POST';

		doFnsFetch(body);
		setFetchToFns(false);
	}, [fetchToFns, fnsPasswordType, doFnsFetch, name, email, phone]);

	useEffect(() => {
		if (!response) return;
		const { user } = response;
		if (!user.name || !user.phone || !user.email || !user.password) {
			return;
		}
		setCurrentUserState(state => ({
			...state,
			isLoading: false,
			isLoggedIn: !!response.user,
			currentUser: response.user || null
		}));
		dispatch({type: 'SET_VIEW', payload: { view: 'balance', panel: 'home'}});
	}, [response, dispatch, setCurrentUserState]);

	useEffect(() => {
		if (!fnsResponse.response) return;
		setSnackbar(
			<Snackbar
				layout="vertical"
				onClose={() => setSnackbar(null)}
				before={<Avatar size={24} style={{backgroundColor: 'var(--accent)'}}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
			>
				{fnsResponse.response.message}
			</Snackbar>
		)
	}, [fnsResponse.response]);

	return(
		<Fragment>
			<PanelHeader
				left={canBack && <PanelHeaderButton onClick={() => {
					dispatch({type: 'SET_VIEW', payload: {view: 'balance', panel: 'home'}})
				}}>
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</PanelHeaderButton>}
			>
				{canBack ? 'Профиль' : 'Регистрация'}
			</PanelHeader>
			<FormLayout>
				{fetchToFns && <FormStatus header="Запрос на получение пароля успешно отправлен" mode="default">
					Пароль должен придти к вам в смс. Введите пароль в соответствующее поле. Если пароль не пришел повторите попытку позже.
				</FormStatus>}
				<Input
					type={'text'}
					top={'Имя'}
					name={'name'}
					value={name}
					onChange={(e) => {setName(e.target.value)}}
				/>
				<FormLayoutGroup top="E-mail и Телефон" bottom="Эти данные можно получить через персональные карточки Вконтакте. Они нужны для того, чтобы получить пароль от ФНС для расшифровки чеков.">
					<Input
						type={'email'}
						top={'e-mail'}
						name={'email'}
						placeholder={'Введите e-mail'}
						value={email}
						onChange={(e) => {setEmail(e.target.value)}}
					/>
					<Input
						type={'phone'}
						top={'Телефон'}
						name={'phone'}
						value={phone}
						placeholder={'Введите телефон'}
						onChange={(e) => {
							e.target.value.replace(/^[8]/, '+7');
							setPhone(e.target.value);
							console.log(phone);
						}}
					/>
					<Button size="xl" onClick={() => {
						bridge.send("VKWebAppGetPersonalCard", {"type": ["phone", "email"]});
					}}>
						Получить данные из VK
					</Button>
				</FormLayoutGroup>
				<FormLayoutGroup top={'Пароль от ФНС'}>
					<Input
						type={'number'}
						top={'Пароль от ФНС'}
						placeholder={'Введите пароль ФНС'}
						name={'kktPassword'}
						value={kktPassword}
						onChange={(e) => {setKktPassword(e.target.value)}}
					/>
					<Div  style={{display: 'flex', justifyContent:'space-between'}}>
						<Button size='l' data-type={'signup'} onClick={(e) => {
							setFnsPasswordType(e.currentTarget.dataset.type);
							setFetchToFns(true);
						}}
							style={{margin: '0px', width: '49%'}}
						>
							Получить пароль
						</Button>
						<Button size='l' data-type={'restore'} onClick={(e) => {
							setFnsPasswordType(e.currentTarget.dataset.type);
							setFetchToFns(true);
						}} style={{margin: '0px', width: '49%'}}	>
							Восстановить пароль
						</Button>
					</Div>
				</FormLayoutGroup>

				<Button size="xl" mode="commerce" onClick={() => {
					setStartFetchData(true);
				}}>
					{canBack ? 'Обновить профиль' : 'Завершить регистрацию'}
				</Button>
			</FormLayout>
			{snackbar}
		</Fragment>
	)
};

export default Profile;
