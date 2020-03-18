import React, {useContext, useState} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Root, Panel, View} from "@vkontakte/vkui";
import Authorization from "./views/Authorization";
import Profile from "./panels/Profile";
import {RouterContext} from "./contexts/routerContext";


const App = () => {
	const [routerContext] = useContext(RouterContext);
	const [popout, setPopout] = useState(null);

	const loadIndicator = (indicator) => {
		setPopout(indicator);
	};

	return (
		<Root activeView={routerContext.view}>
			<View id={'authorization'} activePanel={routerContext.panel} popout={popout}>
				<Panel id={'authorization.login'}>
					<Authorization type={'login'} loadIndicator={loadIndicator}/>
				</Panel>
				<Panel id={'authorization.register'}>
					<Authorization type={'register'} loadIndicator={loadIndicator}/>
				</Panel>
			</View>
			<View id={'profile'} activePanel={routerContext.panel} popout={popout}>
				<Panel id={'profile.edit'}>
					<Profile />
				</Panel>
			</View>
		</Root>
	);
};

export default App;
