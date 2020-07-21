import React, {useContext, useState} from 'react';
import './CardItems.css';
import {format} from "date-fns";
import {Card} from "@vkontakte/vkui";
import {RouterContext} from "../../contexts/routerContext";

const CardItems = () => {
	const [state, dispatch] = useContext(RouterContext);
	const [cardItems] = useState(() => {
		console.log(state);
		return state.receipts
			.filter((item) => format(new Date(item.dateTime), 'yyyy-MM-dd') === format(new Date(state.currentDate), 'yyyy-MM-dd'))
			.map((items) => {
				return items.items.map((item, index) => {
					console.log(item);
					return (
						<Card
							key={index}
							size={'m'}
							onClick={
								() => {
									dispatch({type: 'SET_ITEM_TO_EDIT', payload: {item: item}})
								}
							}
						>
							<div style={{ width: 144, height: 96 }} >
								<p className={'card-item-name'}>{item.name}</p>
							</div>
						</Card>
					)
				})
			});
	});

	console.log('cardItems', cardItems);
	return (
		cardItems
	)
}

export default CardItems;
