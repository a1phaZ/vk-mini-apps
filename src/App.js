import React, { useState } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Root, Panel, View} from "@vkontakte/vkui";
import Authorization from "./views/Authorization";
import Profile from "./panels/Profile";


const App = () => {
	const [activePanel, setActivePanel] = useState('authorization.login');
	const [activeView, setActiveView] = useState('authorization');
	const [popout, setPopout] = useState(null);
	//const [popout, setPopout] = useState(null);

	const go = e => {
		if (!e.currentTarget) {
			setActivePanel(e);
		} else {
			setActivePanel(e.currentTarget.dataset.to);
		}
	};

	const changeActiveView = e => {
		if (!e.currentTarget) {
			setActiveView(e);
		} else {
			setActiveView(e.currentTarget.dataset.to);
		}
	};

	const loadIndicator = (indicator) => {
		setPopout(indicator);
	};

	return (
		<Root activeView={activeView}>
			<View id={'authorization'} activePanel={activePanel} popout={popout}>
				<Panel id={'authorization.login'}>
					<Authorization go={go} type={'login'} goView={changeActiveView} loadIndicator={loadIndicator}/>
				</Panel>
				<Panel id={'authorization.registration'}>
					<Authorization go={go} type={'register'} goView={changeActiveView} loadIndicator={loadIndicator}/>
				</Panel>
			</View>
			<View id={'profile'} activePanel={activePanel} popout={popout}>
				<Panel id={'profile.edit'}>
					<Profile />
				</Panel>
			</View>
		</Root>
	);
};

export default App;
