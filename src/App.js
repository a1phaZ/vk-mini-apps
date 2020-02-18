import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import prepare from "./handlers/prepare";
import ApiService from './services/api';
import Main from "./panels/Main";
import useVK from "./hooks/useVK";
import useFakeUser from "./hooks/useFakeUser";

const App = () => {
	const apiService = new ApiService();
	const [activePanel, setActivePanel] = useState('balance');
	const [fetchedUser, setUser] = useState(null);
	const [token, setToken] = useState(null);
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [popout, setPopout] = useState(null);
	const [qr, setQR] = useState('');
	const [receipts, setReceipts] = useState([
		{
			"_id" : "5ddf911573e0c321bc89f1ef",
			"receipts" : [
				{
					"fn" : "9289000100521868",
					"fd" : "12691",
					"fp" : "339287482"
				}
			],
			"userId" : "5dce89f495636e23345b7d34",
			"dateTime" : "2019-11-12T00:00:00.000",
			"items" : [
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5ddf911573e0c321bc89f1f0",
					"name" : "test",
					"sum" : 1000,
					"income" : true
				},
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5de8e27933db3f375c2daa20",
					"sum" : 490,
					"quantity" : 1,
					"name" : "Пакет-майка Магнит",
					"price" : 490
				},
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5de8e27933db3f375c2daa1f",
					"sum" : 5490,
					"quantity" : 1,
					"name" : "4 СЕЗОНА Рагу овощное 0,4кг(Западный ХК ООО):20",
					"price" : 5490
				},
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5de8e27933db3f375c2daa1e",
					"sum" : 22038,
					"quantity" : 1.225,
					"name" : "Скумбрия с/м уп (вес):6",
					"price" : 17990
				},
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5de8e27933db3f375c2daa1d",
					"sum" : 4490,
					"quantity" : 1,
					"name" : "КРАСКИ ЛЕТА Соте 400 г п/уп(Русская овощная компания):8",
					"price" : 4490
				},
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5de8e27933db3f375c2daa1c",
					"sum" : 3490,
					"quantity" : 1,
					"name" : "MR RICCO Organic Майонез переп яйца 67% 375г д/п(Нэфис):12",
					"price" : 3490
				},
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5de8e27933db3f375c2daa1b",
					"sum" : 6490,
					"quantity" : 1,
					"name" : "Творог обезжиренный Вемол 0,5% 0,25кг конт (ЗАО \"Вемол\") :18",
					"price" : 6490
				},
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5de8e27933db3f375c2daa1a",
					"sum" : 6490,
					"quantity" : 1,
					"name" : "Сметана 15% 0,45кг ф/п (Молкомбинат Кунгурский)",
					"price" : 6490
				},
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5de8e27933db3f375c2daa19",
					"sum" : 7780,
					"quantity" : 2,
					"name" : "Молоко паст 2,5% 1л ф/п (МаСКо):15",
					"price" : 3890
				},
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5de8e27933db3f375c2daa18",
					"sum" : 4790,
					"quantity" : 1,
					"name" : "Яйцо столовое С1 10шт бокс :20",
					"price" : 4790
				}
			],
			"totalSum" : -60548,
			"__v" : 0
		},
		{
			"_id" : "5de8d0037a0bbc1cd8169744",
			"receipts" : [
				{
					"fn" : "9280440300403604",
					"fd" : "8950",
					"fp" : "0648032311"
				}
			],
			"userId" : "5dce89f495636e23345b7d34",
			"dateTime" : "2019-11-29T00:00:00.000",
			"totalSum" : -3663,
			"items" : [
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5de8d0037a0bbc1cd8169746",
					"sum" : 1063,
					"price" : 1063,
					"quantity" : 1,
					"name" : "Услуга питания"
				},
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5de8d0037a0bbc1cd8169745",
					"sum" : 2600,
					"price" : 2600,
					"quantity" : 1,
					"name" : "Услуга питания"
				}
			],
			"__v" : 0
		},
		{
			"_id" : "5ddf912273e0c321bc89f1f5",
			"receipts" : [],
			"userId" : "5dce89f495636e23345b7d34",
			"dateTime" : "2019-11-15T00:00:00.000",
			"items" : [
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5ddf912273e0c321bc89f1f6",
					"name" : "test",
					"sum" : 1000000,
					"income" : true
				},
				{
					"modifiers" : [],
					"properties" : [],
					"_id" : "5ddf99d96db8bf32044d2009",
					"name" : "test",
					"sum" : 1500000,
					"income" : true
				}
			],
			"totalSum" : 2500000,
			"__v" : 0
		},
		{
			"_id" : "5ddf912273e0c321bc89f1f6",
			"receipts" : [],
			"userId" : "5dce89f495636e23345b7d34",
			"dateTime" : "2020-02-09T14:16:00",
			"items": [
				{
					"price": 590,
					"properties": [],
					"sum": 590,
					"name": "Пакет-майка Магнит",
					"quantity": 1,
					"modifiers": []
				},
				{
					"price": 6292,
					"properties": [],
					"sum": 881,
					"name": "ЯБЛОКИ новый урожай 1кг",
					"quantity": 0.14,
					"modifiers": []
				},
				{
					"price": 6291,
					"properties": [],
					"sum": 10821,
					"name": "ЯБЛОКИ новый урожай 1кг",
					"quantity": 1.72,
					"modifiers": []
				},
				{
					"price": 32447,
					"properties": [],
					"sum": 16483,
					"name": "АВОКАДО 1кг",
					"quantity": 0.508,
					"modifiers": []
				},
				{
					"price": 14832,
					"properties": [],
					"sum": 2907,
					"name": "ОГУРЦЫ гладкие 1кг",
					"quantity": 0.196,
					"modifiers": []
				},
				{
					"price": 14831,
					"properties": [],
					"sum": 9610,
					"name": "ОГУРЦЫ гладкие 1кг",
					"quantity": 0.648,
					"modifiers": []
				},
				{
					"price": 4490,
					"properties": [],
					"sum": 8980,
					"name": "СИБИРСКАЯ ЯГОДА Протерт Земляника0,2",
					"quantity": 2,
					"modifiers": []
				},
				{
					"price": 4240,
					"properties": [],
					"sum": 8480,
					"name": "Молоко паст 2,5% 1л ф/п (Нытвенский",
					"quantity": 2,
					"modifiers": []
				},
				{
					"price": 1590,
					"properties": [],
					"sum": 1590,
					"name": "САДЫ ПРИДОНЬЯ Сок яблоко персик 0,2л",
					"quantity": 1,
					"modifiers": []
				},
				{
					"price": 1590,
					"properties": [],
					"sum": 1590,
					"name": "САДЫ ПРИДОНЬЯ Сок мультифруктовый 0,",
					"quantity": 1,
					"modifiers": []
				}
			],
			"totalSum" : -61932,
			"__v" : 0
		}
	]);
	const [{response, isLoading, error}, doVKFetch] = useFakeUser('VKWebAppGetUserInfo');

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			switch (type) {
				case 'VKWebAppUpdateConfig':
					const schemeAttribute = document.createAttribute('scheme');
					schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
					document.body.attributes.setNamedItem(schemeAttribute);
					break;
				case 'VKWebAppOpenCodeReaderResult':
					setQR(data.code_data);
					break;
				default:
					break;
			}
		});
		doVKFetch({});
		// /**
		//  * Получаем данные о пользователе
		//  * */
		// async function fetchData() {
		// 	const vk_user = await connect.send('VKWebAppGetUserInfo');
		// 	/**
		// 	 * Если есть токен, то пытаемся авторизоваться
		// 	 * Если нет, пытаемся залогиниться
		// 	 * Если пользователя нет на сервере - регистрируемся
		// 	 * */
		// 	if (vk_user.id) {
		// 		if (token) {
		// 			await apiService.userCurrent({token})
		// 				.then(user => onData(user))
		// 				.catch(err => onError(err));
		// 		} else {
		// 			const body = {
		// 				user:{
		// 					id: vk_user.id,
		// 				}
		// 			};
		// 			await apiService.userLogin(body)
		// 				.then(async user => {
		// 					if (user) {
		// 						onData(user)
		// 					} else {
		// 						const user = await apiService.userRegister(body);
		// 						onData(user);
		// 					}
		// 				})
		// 				.catch(err => onError(err));
		// 		}
		// 	} else {
		// 		const error = new Error('Неполучен пользователь vkontakte');
		// 		onError(error);
		// 	}
		// }
		// //fetchData();
	}, []);

	const QR = prepare.qr(qr);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<Main
			id={activePanel}
			fetchedUser={response}
			go={go}
			qr={QR}
			receipts={receipts}
			popout={popout}
		/>
	);
};

export default App;

