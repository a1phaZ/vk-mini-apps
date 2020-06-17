import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';
import {CurrentUserProvider} from "./contexts/currentUser";
import {AppSign} from "./contexts/appSign";
import CurrentUserChecker from "./components/CurrentUserChecker";
import {RouterContextProvider} from "./contexts/routerContext";
// import InstallingTheme from "./components/InstallingTheme";
// import * as eruda from 'eruda';
// import registerServiceWorker from './sw';

// const el = document.createElement('div');
// document.body.appendChild(el);
//
// eruda.init({
//   container: el,
//   tool: ['console', 'elements']
// });

bridge.subscribe(({ detail: { type, data }}) => {
	if (type === 'VKWebAppUpdateConfig') {
		const schemeAttribute = document.createAttribute('scheme');
		schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
		document.body.attributes.setNamedItem(schemeAttribute);
	}
});

// Init VK  Mini App
bridge.send('VKWebAppInit');

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

window.onload = () => {
	ReactDOM.render(
		// <InstallingTheme>

			<RouterContextProvider>
				<AppSign>
					<CurrentUserProvider>
						<CurrentUserChecker>
							<App/>

						</CurrentUserChecker>
					</CurrentUserProvider>
				</AppSign>
			</RouterContextProvider>

		// </InstallingTheme>
		,
		document.getElementById('root')
	);
};
