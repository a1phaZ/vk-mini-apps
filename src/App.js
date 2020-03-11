import React, { useState, useEffect, useContext } from 'react';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import useApi from "./hooks/useApi";
import {CurrentUserContext} from "./contexts/currentUser";
import {AppSignContext} from "./contexts/appSign";
import {Root, Panel, View} from "@vkontakte/vkui";
import Authorization from "./views/Authorization";


const App = () => {
	const [activePanel, setActivePanel] = useState('authorization.login');
	const [activeView, setActiveView] = useState('authorization');
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [apiUser, doApiFetch] = useApi('/users');
	const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext);
	const [{vkUserId, matchUrlParams}] = useContext(AppSignContext);

	console.log({currentUserState, vkUserId, matchUrlParams});


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

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const changeActiveView = e => {
		setActiveView(e.currentTarget.dataset.to);
	};

	return (
		<Root activeView={activeView}>
			<View id={'authorization'} activePanel={activePanel} popout={popout}>
				<Panel id={'authorization.login'}>
					<Authorization go={go} type={'login'} goView={changeActiveView}/>
				</Panel>
				<Panel id={'authorization.registration'}>
					<Authorization go={go} type={'registration'} goView={changeActiveView}/>
				</Panel>
			</View>
		</Root>
	);
};

export default App;
