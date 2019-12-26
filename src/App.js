import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import {Epic, Tabbar, TabbarItem} from "@vkontakte/vkui";
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';
import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon24Qr from '@vkontakte/icons/dist/24/qr';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';

import Home from './panels/Home';
import Profile from "./panels/Profile";
import Info from "./panels/Info";
import Receipt from "./panels/Receipt";
import prepare from "./handlers/prepare";

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
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
		}
	]);

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
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const QR = prepare.qr(qr);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<Epic activeStory={activePanel} tabbar={
			<Tabbar>
				<TabbarItem
					selected={activePanel === 'home'}
					onClick={go}
					data-to='home'
				>
					<Icon28HomeOutline />
				</TabbarItem>
				<TabbarItem
					onClick={() => {connect.send("VKWebAppOpenCodeReader", {});}}
				>
					<Icon24Qr height={28} width={28}/>
				</TabbarItem>
				<TabbarItem
					selected={activePanel === 'profile'}
					onClick={go}
					data-to='profile'
				>
					<Icon28User />
				</TabbarItem>
				<TabbarItem
					selected={activePanel === 'info'}
					onClick={go}
					data-to='info'
				>
					<Icon28InfoOutline />
				</TabbarItem>
			</Tabbar>
		}>
			<View id='home' activePanel='home' popout={popout}>
				<Home id='home' fetchedUser={fetchedUser} go={go} qr={QR} receipts={receipts}/>
			</View>
			<View id='profile' activePanel='profile' popout={popout}>
				<Profile id='profile' go={go} />
			</View>
			<View id='info' activePanel='info' popout={popout}>
				<Info id='info' go={go} />
			</View>
			{receipts.map((receipt, index) => {
				return(
					<View id={receipt._id} activePanel={receipt._id} key={index}>
						<Receipt id={receipt._id} dateTime={receipt.dateTime} items={receipt.items} go={go}/>
					</View>
				)
			})}
		</Epic>
	);
};

export default App;

