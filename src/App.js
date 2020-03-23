import React, {useContext} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Root, Panel, View} from "@vkontakte/vkui";
import Authorization from "./panels/Authorization";
import Profile from "./panels/Profile";
import {RouterContext} from "./contexts/routerContext";
import {LoadingContext} from "./contexts/loadingContext";
import Balance from "./panels/Balance";
import AddDay from "./panels/AddDay";


const App = () => {
	const [routerContext] = useContext(RouterContext);
	const [{popout}] = useContext(LoadingContext);

	return (
		<Root activeView={routerContext.view}>
			<View id={'authorization'} activePanel={routerContext.panel} popout={popout}>
				<Panel id={'authorization.login'}>
					<Authorization type={'login'} />
				</Panel>
				<Panel id={'authorization.register'}>
					<Authorization type={'register'} />
				</Panel>
			</View>
			<View id={'profile'} activePanel={routerContext.panel} popout={popout}>
				<Panel id={'profile.edit'}>
					<Profile />
				</Panel>
			</View>
			<View id={'balance'} activePanel={routerContext.panel} popout={popout}>
				<Panel id={'balance.home'}>
					<Balance />
				</Panel>
				<Panel id={'balance.add'}>
					<AddDay />
				</Panel>
			</View>
		</Root>
	);
};

export default App;
