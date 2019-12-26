import React from 'react';
import {Group, List, Panel, PanelHeader} from "@vkontakte/vkui";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import prepare from "../../handlers/prepare";

const Receipt = ({items, id, dateTime}) => {
	const receiptItem = (items.map((item, index) => {
		return(
			<Group title={item.name} key={index}>
				<List>
					{item.price ? <Cell indicator={item.price / 100}>Цена</Cell> : null}
					{item.quantity ? <Cell indicator={item.quantity}>Кол-во</Cell> : null}
					<Cell indicator={item.income ? item.sum / 100 : (-1) *item.sum / 100}>Сумма</Cell>
				</List>
			</Group>
		)
	}));

	return(
		<Panel id={id}>
			<PanelHeader>
				{prepare.date(dateTime)}
			</PanelHeader>
			{receiptItem}
		</Panel>
	)
};

export default Receipt;