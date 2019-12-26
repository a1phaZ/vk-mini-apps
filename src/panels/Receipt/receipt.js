import React from 'react';
import {Group, HeaderButton, IOS, List, Panel, PanelHeader, platform} from "@vkontakte/vkui";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import prepare from "../../handlers/prepare";
import ColoredSum from "../ColoredSum";

const Receipt = ({items, id, dateTime, go}) => {
	const osName = platform();

	const receiptItem = (items.map((item, index) => {
		const sum = item.income ? item.sum : (-1) * item.sum ;

		return(
			<Group title={item.name} key={index}>
				<List>
					{item.price ? <Cell indicator={prepare.sum(item.price)}>Цена</Cell> : null}
					{item.quantity ? <Cell indicator={item.quantity}>Кол-во</Cell> : null}
					<Cell
						indicator={<ColoredSum sum={sum}/>}
					>
						Сумма
					</Cell>
				</List>
			</Group>
		)
	}));

	return(
		<Panel id={id}>
			<PanelHeader left={<HeaderButton onClick={go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>
				{prepare.date(dateTime)}
			</PanelHeader>
			{receiptItem}
		</Panel>
	)
};

export default Receipt;