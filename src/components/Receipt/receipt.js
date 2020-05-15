import React, {Fragment} from 'react';
import {Separator} from "@vkontakte/vkui";
import prepare from "../../handlers/prepare";
import ColoredSum from "../ColoredSum";

import './receipt.css';
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";

const Receipt = ({items, id, isSearch=false}) => {
	// const [showEdit, setShowEdit] = useState(false);
	// const [editElId, setEditElId] = useState('');
	const receiptItem = (items.map((item, index) => {
		const sum = item.income ? item.sum : (-1) * item.sum ;
		console.log()

		//TODO Отображение поля для редактирования названия
		return(
			<Fragment key={index}>
				<div className={'receipt-item'} onClick={() => {
					// setShowEdit(true);
					// setEditElId(item._id);
				}}>
					<span className={'receipt-item-name'}>{item.name}</span>
					{item.price && !isSearch ? <span className={'receipt-item-price'}>{prepare.sum(item.price)}</span> : null}
					{item.quantity && !isSearch ? <span className={'receipt-item-quantity'}>{item.quantity}</span> : null}
					{item.dateTime && isSearch ? <span className={'receipt-item-dateTime'}>{prepare.date(item.dateTime)}</span> : null}
					{sum ? <span className={'receipt-item-sum'}>{<ColoredSum sum={sum}/>}</span> : null}
				</div>
				{/*{*/}
				{/*	showEdit && item._id === editElId ?*/}
				{/*		<FormLayout>*/}
				{/*			<FormLayoutGroup style={{display: 'flex'}}>*/}
				{/*				<Input type="text" defaultValue={item.name}/>*/}
				{/*				<Button>Stretched</Button>*/}
				{/*			</FormLayoutGroup>*/}
				{/*		</FormLayout> :*/}
				{/*		null*/}
				{/*}*/}
			</Fragment>
		)
	}));

	return(
		<FormLayout id={id} className={'receipt-item-wrapper'}>
			<div className={'receipt-item'}>
				<span className={'receipt-item-name'}>Наименование</span>
				{!isSearch ?
					<Fragment>
						<span  className={'receipt-item-price'}>Цена</span>
						<span  className={'receipt-item-quantity'}>Кол-во</span>
					</Fragment> :
					<span className={'receipt-item-dateTime'}>Дата</span>
				}
				<span className={'receipt-item-sum'}>Сумма</span>
			</div>
			<Separator />
			{receiptItem}
			<Separator />
			<div className={'receipt-total'}>
				<span className={''}>Итого:</span>
				<span><ColoredSum sum={prepare.totalSumWithParams(items)}/></span>
			</div>
		</FormLayout>
	)
};

export default Receipt;