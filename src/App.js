import React, { useState, useEffect, useContext } from 'react';
import connect from '@vkontakte/vk-connect';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import prepare from "./handlers/prepare";
import Main from "./panels/Main";
import useApi from "./hooks/useApi";
import {CurrentUserContext} from "./contexts/currentUser";
import {AppSignContext} from "./contexts/appSign";
import fakeData from './handlers/receipts';

const App = () => {
	const [activePanel, setActivePanel] = useState('balance');
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [qr, setQR] = useState('');
	const [receipts] = useState(fakeData);
	const [apiUser, doApiFetch] = useApi('/users');
	const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext);
	const [{vkUserId, matchUrlParams}] = useContext(AppSignContext);

	console.log({vkUserId, matchUrlParams});

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
	}, []);

	useEffect(() => {
		if (!vkUserId) return;
		doApiFetch({
			method: 'POST',
			user: {
				id: +vkUserId
			}
		});
		setPopout(null);
	}, [vkUserId, doApiFetch]);

	useEffect(() => {
		if (!apiUser.response) return;

		setCurrentUserState(state => ({
			...state,
			isLoading: false,
			isLoggedIn: true,
			currentUser: apiUser.response.user
		}))
	}, [apiUser.response, setCurrentUserState]);

	const QR = prepare.qr(qr);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	console.log(currentUserState.isLoggedIn);
	return (
		<div>
			{matchUrlParams
				?
					<Main
						id={activePanel}
						go={go}
						qr={QR}
						receipts={receipts}
						popout={popout}
					/>
				:
					null
			}
		</div>
	);
};

export default App;
