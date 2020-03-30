import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
import {CurrentUserProvider} from "./contexts/currentUser";
import {AppSignProvider} from "./contexts/appSign";
import InstallingTheme from "./components/InstallingTheme";
import CurrentUserChecker from "./components/CurrentUserChecker";
import {RouterContextProvider} from "./contexts/routerContext";
//import {LoadingProvider} from "./contexts/loadingContext";
// import registerServiceWorker from './sw';

// Init VK  Mini App
connect.send('VKWebAppInit');

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

ReactDOM.render(
	<InstallingTheme>
		<AppSignProvider>
			{/*<LoadingProvider>*/}
				<CurrentUserProvider>
					<RouterContextProvider>
						<CurrentUserChecker>
							<App />
						</CurrentUserChecker>
					</RouterContextProvider>
				</CurrentUserProvider>
			{/*</LoadingProvider>*/}
		</AppSignProvider>
	</InstallingTheme>
	,
	document.getElementById('root')
);
