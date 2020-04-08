import React, {useState, useEffect, Fragment, useContext} from 'react';
import {
	FormLayout,
	IOS,
	PanelHeader,
	platform,
	PanelHeaderButton,
	Group, Cell, Button, Input, FormLayoutGroup, FormStatus
} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import connect from "@vkontakte/vk-connect";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import useApi from "../hooks/useApi";
import {CurrentUserContext} from "../contexts/currentUser";
import {RouterContext} from "../contexts/routerContext";

const Profile = ({go, fetchedUser}) =>{
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');
	const [kktPassword, setKktPassword] = useState('');
	const [fetchToFns, setFetchToFns] = useState(false);
	//TODO Использовать {response, error} чтобы делать переход или показывать ошибки
	const [{response}, doApiFetch] = useApi(`/users/profile`);
	const [startFetchData, setStartFetchData] = useState(false);
	const [currentUserState] = useContext(CurrentUserContext);
	const [, dispatch] = useContext(RouterContext);
	const osName = platform();

	useEffect(()=>{
		//TODO Перейти с connect на bridge!!!!
		connect.subscribe(({ detail: { type, data }}) => {
			switch (type) {
				case 'VKWebAppGetPersonalCardResult':
					setEmail(data.email);
					setPhone(data.phone);
					break;
				default:
					break;
			}
		});
	}, []);

	useEffect(() => {
		setEmail(currentUserState.currentUser.email || '');
		setName(currentUserState.currentUser.name || '');
		setPhone(currentUserState.currentUser.phone || '');
		setKktPassword(currentUserState.currentUser.password || '');
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
		if (!response) return;
		const { user } = response;
		if (!user.name || !user.phone || !user.email || !user.password) {
			return;
		}
		dispatch({type: 'SET_VIEW', payload: { view: 'balance', panel: 'home'}});
	}, [response, dispatch]);

	return(
		<Fragment>
			<PanelHeader
				left={<PanelHeaderButton onClick={go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</PanelHeaderButton>}
			>
				Профиль
			</PanelHeader>
			{fetchedUser &&
			<Group title={fetchedUser.id}>
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>}
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
						onChange={(e) => {setPhone(e.target.value)}}
					/>
					<Button size="xl" onClick={() => {
						//TODO Перейти с connect на bridge!!!!
						connect.send("VKWebAppGetPersonalCard", {"type": ["phone", "email"]});
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
					<Button size="xl" onClick={() => {
						setFetchToFns(true);
					}}>
						Получить пароль от ФНС
					</Button>
				</FormLayoutGroup>

				<Button size="xl" mode="commerce" onClick={() => {
					setStartFetchData(true);
				}}>
					Обновить профиль пользователя
				</Button>
			</FormLayout>
		</Fragment>
	)
};

export default Profile;
