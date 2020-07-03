import React, {Fragment, useContext, useEffect, useState, useCallback} from 'react';
import {IOS, Group, PanelHeader, Header, SimpleCell, platform} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
// import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';
import {RouterContext} from "../contexts/routerContext";
import useApi from "../hooks/useApi";
import CustomSnackBar from "../components/CustomSnackbar";

const More = () => {
	const [state, dispatch] = useContext(RouterContext);
	const [{response, error}, doApiFetch] = useApi('/day');
	const osName = platform();
	const [date] = useState(() => {
		const date = new Date();
		const m = date.getMonth()+1 > 9 ? date.getMonth()+1 : `0${date.getMonth()+1}`;
		const d = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
		return `${date.getFullYear()}-${m}-${d}`;
		});
	const [snackbar, setSnackbar] = useState(null);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			switch (type) {
					case 'VKWebAppOpenPayFormResult':
						if (data.status) {
							console.log('Платеж успешно совершен');
							const body = {
								method: 'POST',
								date: date,
								items: [
									{
										name: 'Помощь проекту Balance',
										quantity: 1,
										price: data.amount * 100,
										sum: data.amount * 100,
										income: false,
										modifiers: [],
										properties: [{transactionId: data.transaction_id}],
										}
									]
								};
							doApiFetch(body);
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

	// const onCellClick = (e) => {
	// 	dispatch({type: 'SET_PANEL', payload: { panel: e.currentTarget.dataset.panel }});
	// 	}

	const onClose = useCallback(() => {
		dispatch({ type: 'UNSET_ERROR'});
		setSnackbar(null);
		}, [dispatch]);

	useEffect(() => {
		if (!response) return;
		setSnackbar(<CustomSnackBar message={'Спасибо за помощь проекту!'} isError={false} onClose={onClose}/>)
		}, [response, onClose]);

	useEffect(() => {
		if (!state.error) return;
		dispatch({
			type: 'SET_ERROR',
			payload: {
				error: error
				}
			})
		setSnackbar(<CustomSnackBar message={state.error.message} isError={true} onClose={onClose}/>);
		}, [error, dispatch, state.error, onClose]);


	return (
		<Fragment>
			<PanelHeader>
				Дополнительно
			</PanelHeader>
			{/*<Group>*/}
			{/*	<Header mode={'secondary'}>Дополнительно</Header>*/}
			{/*	<SimpleCell*/}
			{/*		data-panel={'catalog'}*/}
			{/*		expandable*/}
			{/*		before={<Icon28ListOutline />}*/}
			{/*		onClick = {onCellClick}*/}
			{/*	>*/}
			{/*		Справочник*/}
			{/*	</SimpleCell>*/}
			{/*</Group>*/}
			{
				osName !== IOS 
				&&
				<Group>
					<Header mode={'secondary'}>Помощь проекту</Header>
					<SimpleCell
						data-panel={'catalog'}
						expandable
						before={<Icon28MoneyCircleOutline />}
						onClick = {() => {
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
						>
							На кофе разработчику
						</SimpleCell>
					</Group>
					}
					{snackbar}
				</Fragment>
		)
};

export default More;
