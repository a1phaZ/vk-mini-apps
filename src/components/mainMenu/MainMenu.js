import React, {Fragment, useContext, useState} from 'react';
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import {List, PanelHeaderContent, PanelHeaderContext, Separator} from "@vkontakte/vkui";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";

import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import {RouterContext} from "../../contexts/routerContext";
import MenuItem from "./MenuItem";

const MainMenu = () => {
	const [contextOpened, setContextOpened] = useState(false);
	const [, dispatch] = useContext(RouterContext);

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
						before={<Icon28SettingsOutline />}
						// onClick={selectMenu}
						view={'settings'}
						mode={'edit'}
						title={'Настройки приложения *'}
					/>
					<MenuItem
						before={<Icon28MoneyCircleOutline />}
						// onClick={selectMenu}
						view={'donation'}
						mode={'donate'}
						title={'На кофе разработчику*'}
					/>
					<Separator />
					<Cell>
						* в разработке
					</Cell>
				</List>
			</PanelHeaderContext>
		</Fragment>
	)
}

export default MainMenu;
