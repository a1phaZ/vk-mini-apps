import React from 'react';
import {Separator} from "@vkontakte/vkui";
import prepare from "../../handlers/prepare";
import ColoredSum from "../ColoredSum";

import './receipt.css';
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";

const Receipt = ({items, id}) => {
	const receiptItem = (items.map((item, index) => {
		const sum = item.income ? item.sum : (-1) * item.sum ;

		return(
			<div key={index} className={'receipt-item'}>
				<span className={'receipt-item-name'}>{item.name}</span>
				{item.price ? <span>{prepare.sum(item.price)}</span> : null}
				{item.quantity ? <span>{item.quantity}</span> : null}
				{sum ? <span>{<ColoredSum sum={sum}/>}</span> : null}
			</div>
		)
	}));

	return(
		<FormLayout id={id} className={'receipt-item-wrapper'}>
			<div className={'receipt-item'}>
				<span className={'receipt-item-name'}>Наименование</span>
				<span>Цена</span>
				<span>Кол-во</span>
				<span>Сумма</span>
			</div>
			<Separator />
			{receiptItem}
			<Separator />
			<div className={'receipt-total'}>
				<span className={''}>Итого:</span>
				<span><ColoredSum sum={prepare.totalSumWithParams(items)} fs={'2em'}/></span>
			</div>
		</FormLayout>
	)
};

export default Receipt;