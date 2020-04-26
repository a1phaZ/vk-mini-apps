import React, {Fragment, useContext, useState, useEffect} from 'react';
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import {List, PanelHeaderContent, PanelHeaderContext} from "@vkontakte/vkui";

import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import {RouterContext} from "../../contexts/routerContext";
import MenuItem from "./MenuItem";
import bridge from '@vkontakte/vk-bridge';

const MainMenu = () => {
	const [contextOpened, setContextOpened] = useState(false);
	const [, dispatch] = useContext(RouterContext);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			switch (type) {
				case 'VKWebAppOpenPayFormResult':
					if (data.status) {
						console.log('Платеж успешно совершен');
					}
					break;
				case 'VKWebAppOpenPayFormFailed':
					console.log('profile error', data);
					break;
				default:
					break;
			}
		});
	});

	const toggleContext = () => {
		setContextOpened(!contextOpened);
	}

	const selectMenu = (e) => {
		const {view, mode} = e.currentTarget.dataset;
		dispatch({type: 'SET_VIEW', payload: {view: view, panel: mode}});
	}

	return (
		<Fragment>
			<PanelHeader>
				<PanelHeaderContent
					aside={<Icon16Dropdown style={{ transform: `rotate(${contextOpened ? '180deg' : '0'})` }} />}
					onClick={toggleContext}
				>
					Balance
				</PanelHeaderContent>
			</PanelHeader>
			<PanelHeaderContext opened={contextOpened} onClose={toggleContext}>
				<List>
					<MenuItem
						before={<Icon28UsersOutline />}
						onClick={selectMenu}
						view={'profile'}
						mode={'edit'}
						title={'Профиль пользователя'}
					/>
					<MenuItem
						before={<Icon28MoneyCircleOutline />}
						onClick={() => {
							bridge.send("VKWebAppOpenPayForm", {
								"app_id": +process.env.REACT_APP_ID,
								"action": "pay-to-user",
								"params": {
									"amount": 100,
									"description": "На кофе разработчику",
									"user_id": +process.env.REACT_APP_USER_ID
								}
							});
						}}
						view={'donation'}
						mode={'donate'}
						title={'На кофе разработчику'}
					/>
				</List>
			</PanelHeaderContext>
		</Fragment>
	)
}

export default MainMenu;
