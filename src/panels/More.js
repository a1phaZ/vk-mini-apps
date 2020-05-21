import React, {Fragment, useContext} from 'react';
import {Group, PanelHeader, Header, SimpleCell} from '@vkontakte/vkui';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';
import {RouterContext} from "../contexts/routerContext";

const More = () => {
	const [, dispatch] = useContext(RouterContext);
	const onCellClick = (e) => {
		dispatch({type: 'SET_PANEL', payload: { panel: e.currentTarget.dataset.panel }});
	}
	return (
		<Fragment>
			<PanelHeader>
				Дополнительно
			</PanelHeader>
			<Group>
				<Header mode={'secondary'}>Дополнительно</Header>
				<SimpleCell
					data-panel={'catalog'}
					expandable
					before={<Icon28ListOutline />}
					onClick = {onCellClick}
				>
					Справочник
				</SimpleCell>
			</Group>
		</Fragment>
	)
};

export default More;