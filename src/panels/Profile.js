import React, {useState, useEffect, Fragment, useContext, useReducer, useCallback} from 'react';
import {
	FormLayout,
	IOS,
	PanelHeader,
	platform,
	PanelHeaderButton, Button, Input, FormLayoutGroup, Snackbar,
	Div, FixedLayout
} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import bridge from "@vkontakte/vk-bridge";
import useApi from "../hooks/useApi";
import {RouterContext} from "../contexts/routerContext";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Icon16Done from '@vkontakte/icons/dist/16/done';
import CustomSnackBar from "../components/CustomSnackbar";
import useLocalStorage from "../hooks/useLocalStorage";
import './styles.css';

const initialState = {
	email: '',
	phone: '',
	name: '',
	kktPassword: ''
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_EMAIL':
			return {
				...state,
				email: action.payload.email
			}
		case 'SET_PHONE':
			return {
				...state,
				phone: action.payload.phone
			}
		case 'SET_NAME':
			return {
				...state,
				name: action.payload.name
			}
		case 'SET_PASSWORD':
			return {
				...state,
				kktPassword: action.payload.password
			}
		case 'INIT':
			const { email, name, phone, password } = action.payload.currentUser;
			return {
				...state,
				email: email || '',
				name: name || '',
				phone: phone || '',
				kktPassword: password || ''
			}
		default:
			return state;
	}
}

const Profile = () =>{
	const [fetchToFns, setFetchToFns] = useState(false);
	const [snackbar, setSnackbar] = useState(null);
	const [init, setInit] = useState(true);
	const [fnsPasswordType, setFnsPasswordType] = useState('');
	const [{response}, doApiFetch] = useApi(`/users/profile`);
	const [fnsResponse, doFnsFetch] = useApi(`/fns/password`);
	const [startFetchData, setStartFetchData] = useState(false);
	const [state, dispatch] = useContext(RouterContext);
	const [formState, dispatchForm] = useReducer(reducer, initialState);
	const osName = platform();
	const [, setToken] = useLocalStorage('token');

	useEffect(()=>{
		bridge.subscribe(({ detail: { type, data }}) => {
			switch (type) {
				case 'VKWebAppGetUserInfoResult':
					dispatchForm({type: 'SET_NAME', payload: {name: `${data.first_name} ${data.last_name}`}});
					dispatch({type: 'HIDE_LOADING'});
					break;
				case 'VKWebAppGetUserInfoFailed':
					dispatchForm({type: 'SET_NAME', payload: {name: ``}});
					dispatch({type: 'HIDE_LOADING'});
					console.log(data);
					break;
				case 'VKWebAppGetPersonalCardResult':
					dispatchForm({type: 'SET_EMAIL', payload: {email: data.email}});
					dispatchForm({type: 'SET_PHONE', payload: {phone: data.phone}});
					console.log('profile', data);
					break;
				case 'VKWebAppGetPersonalCardFailed':
					console.log('profile error', data);
					break;
				default:
					break;
			}
		});
	}, [dispatch]);

	const onClose = useCallback(() => {
		dispatch({ type: 'UNSET_ERROR'});
		setSnackbar(null);
	}, [dispatch]);

	useEffect(() => {
		if (!init) return;
		dispatchForm({type: 'INIT', payload: {currentUser: state.currentUser}});
		if (state.currentUser.name === '') {
			dispatch({type: 'SHOW_LOADING'});
			bridge.send('VKWebAppGetUserInfo', {});
		}
		setInit(false);
	}, [state, init, dispatch]);

	useEffect(()=>{
		if (!startFetchData) return;
		const body = {
			method: 'PUT',
			update: formState
		};
		doApiFetch(body);
		setStartFetchData(false);
	},[startFetchData, doApiFetch, formState]);

	useEffect(() => {
		if (!fetchToFns) return;
		let body = {};
		if (fnsPasswordType !== 'restore') {
			body.name = formState.name;
			body.email = formState.email;
		}
		body.params = {
			type: fnsPasswordType
		};
		body.phone = formState.phone.replace(/[ ()-]/g, '');
		body.phone = body.phone.replace(/^[8]/g, '+7');
		body.method = 'POST';
		doFnsFetch(body);
		setFetchToFns(false);
	}, [fetchToFns, fnsPasswordType, doFnsFetch, formState]);

	useEffect(() => {
		if (!response) return;
		setToken(response.user.token);
		dispatch({type: 'SET_USER', payload: { user: response.user || null, isLoggedIn: !!response.user}});
		dispatch({type: 'SET_VIEW', payload: { view: 'balance', panel: 'home'}});
	}, [response, dispatch, setToken]);

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

	useEffect(() => {
		if (!state.error) return;
		setSnackbar(<CustomSnackBar message={state.error.message} isError={true} onClose={onClose}/>);
	}, [state.error, onClose]);

	const getDataFromVK = () => {
		bridge.send("VKWebAppGetPersonalCard", {"type": ["phone", "email"]});
	}

	return(
		<Fragment>
			<PanelHeader
				left={<PanelHeaderButton onClick={() => {
					dispatch({type: 'SET_VIEW', payload: {view: 'balance', panel: 'home'}})
				}}>
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</PanelHeaderButton>}
			>
				Профиль
			</PanelHeader>
			<FormLayout style={{paddingBottom: 40}}>
				<Input
					type={'text'}
					top={'Имя'}
					name={'name'}
					value={formState.name}
					onChange={(e) => {dispatchForm({type: 'SET_NAME', payload: {name: e.currentTarget.value}})}}
				/>
				<FormLayoutGroup
					top="E-mail и Телефон"
					bottom="Эти данные нужны для того, чтобы пройти регистрацию в сервисе проверки чеков ФНС.
					Регистрация дает возможность получать расшифровку данных по чекам при сканировании QR кода"
				>
					<Input
						type={'email'}
						top={'e-mail'}
						name={'email'}
						placeholder={'Введите e-mail'}
						value={formState.email}
						onChange={(e) => {dispatchForm({type: 'SET_EMAIL', payload: { email: e.currentTarget.value }})}}
						onClick={getDataFromVK}
					/>
					<Input
						type={'phone'}
						top={'Телефон'}
						name={'phone'}
						value={formState.phone}
						placeholder={'Введите телефон'}
						onChange={(e) => {
							e.target.value.replace(/^[8]/, '+7');
							dispatchForm({type: 'SET_PHONE', payload: { phone: e.currentTarget.value }})
						}}
						onClick={getDataFromVK}
					/>
				</FormLayoutGroup>
				{<FormLayoutGroup
					top={'Пароль от ФНС'}
					bottom={'Если вы когда-либо регистрировались в сервисе проверки чеков ФНС, но забыли пароль нажмите "Восстановить пароль". ' +
					'Если не хотите получать пароль по каким то причинам, оставьте поле ввода пароля пустым, но тогда у вас не будет возможности' +
					' сканировать чеки и получать расшифровку по чекам'}
				>
					<Input
						type={'number'}
						top={'Пароль от ФНС'}
						placeholder={'Введите пароль ФНС'}
						name={'kktPassword'}
						value={formState.kktPassword}
						onChange={(e) => {
							dispatchForm({type: 'SET_PASSWORD', payload: {password: e.currentTarget.value}})
						}}
					/>
					<Div style={{display: 'flex', justifyContent: 'space-between'}}>
						<Button
							size='l'
							data-type={'signup'}
							onClick={
								(e) => {
									setFnsPasswordType(e.currentTarget.dataset.type);
									setFetchToFns(true);
								}
							}
							style={{margin: '0px', width: '49%'}}
							disabled={!(formState.email && formState.name && formState.phone)}
						>
							Регистрация
						</Button>
						<Button
							size='l'
							data-type={'restore'}
							onClick={
								(e) => {
									setFnsPasswordType(e.currentTarget.dataset.type);
									setFetchToFns(true);
								}
							}
							style={{margin: '0px', width: '49%'}}
							disabled={!(formState.email && formState.name && formState.phone)}
						>
							Забыли пароль?
						</Button>
					</Div>
				</FormLayoutGroup>}

				<FixedLayout className={'fixed-button'} style={{marginBottom: '1em'}} vertical="bottom">
					<Button size="xl" mode="commerce" onClick={() => {
						setStartFetchData(true);
					}}>
						Обновить профиль
					</Button>
				</FixedLayout>
			</FormLayout>
			{snackbar}
		</Fragment>
	)
};

export default Profile;
