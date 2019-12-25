import React from 'react';
import {Panel, PanelHeader} from '@vkontakte/vkui';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';

const Info = ({id}) => {
	return (
		<Panel id={id}>
			<PanelHeader before={<Icon28InfoOutline />}>Информация</PanelHeader>
		</Panel>
	)
};

export default Info;