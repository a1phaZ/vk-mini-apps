import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Profile from "./panels/Profile";
import {Epic, Tabbar, TabbarItem} from "@vkontakte/vkui";
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';
import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon24Qr from '@vkontakte/icons/dist/24/qr';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [qr, setQR] = useState('');

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

	const prepareQR = (qr) => {
		let arr, dt, sum, fn, i, fp;

		if (qr) {
			[, dt, sum, fn, i, fp] = qr.match(/t=(\w{8}T\w+)&s=(\w+\.*\w+)&fn=(\w+)&i=(\w+)&fp=(\w+)/);
		}

		return {
			dt,
			sum,
			fn,
			i,
			fp
		}
	};

	const QR = prepareQR(qr);

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
					selected={activePanel === 'profile'}
					onClick={go}
					data-to='profile'
				>
					<Icon28User />
				</TabbarItem>
				<TabbarItem
					onClick={() => {connect.send("VKWebAppOpenCodeReader", {});}}
				>
					<Icon24Qr height={28} width={28}/>
				</TabbarItem>
			</Tabbar>
		}>
			<View id='home' activePanel='home' popout={popout}>
				<Home id='home' fetchedUser={fetchedUser} go={go} qr={QR}/>
			</View>
			<View id='profile' activePanel='profile' popout={popout}>
				<Profile id='profile' go={go} />
			</View>
		</Epic>
	);
};

export default App;

