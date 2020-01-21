import React from 'react';
import {Group, List} from "@vkontakte/vkui";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import prepare from "../../handlers/prepare";
import ColoredSum from "../ColoredSum";

const Receipt = ({items, id, dateTime, setActiveModal}) => {
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
		<Group id={id}>
			{receiptItem}
		</Group>
	)
};

export default Receipt;