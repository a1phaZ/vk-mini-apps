import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Profile from "./panels/Profile";

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
			// dt = qr.match(/t=([0-9]{8}T[0-9]+)/)[1];
			// sum = qr.match(/s=(\w+\.*\w+)/)[1].split(/\.*/).join('');
			// fn = qr.match(/fn=(\w+)/)[1];
			// i = qr.match(/i=(\w+)/)[1];
			// fp = qr.match(/fp=(\w+)/)[1];
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
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} qr={QR}/>
			<Persik id='persik' go={go} />
			<Profile id='profile' go={go} />
		</View>
	);
};

export default App;

