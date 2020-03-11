import React, { useState, useEffect, useContext } from 'react';
import connect from '@vkontakte/vk-connect';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import prepare from "./handlers/prepare";
import Main_ from "./panels/Main_";
import useApi from "./hooks/useApi";
import {CurrentUserContext} from "./contexts/currentUser";
import {AppSignContext} from "./contexts/appSign";
import fakeData from './handlers/receipts';
import {Placeholder, Root, Panel, View, FormLayout, FormLayoutGroup, Input, Div} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import ColoredSum from "./panels/ColoredSum";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Authorization from "./views/Authorization";


const App = () => {
	const [activePanel, setActivePanel] = useState('authorization.login');
	const [activeView, setActiveView] = useState('authorization');
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

	const changeActiveView = e => {
		setActiveView(e.currentTarget.dataset.to);
	};

	console.log({currentUserState});
	return (
		<Root activeView={activeView}>
			<View id={'authorization'} activePanel={activePanel}>
				<Panel id={'authorization.login'}>
					<Authorization go={go} type={'login'}/>
				</Panel>
				<Panel id={'authorization.registration'}>
					<Authorization go={go} type={'registration'}/>
				</Panel>
			</View>
		</Root>
	);
};

export default App;
