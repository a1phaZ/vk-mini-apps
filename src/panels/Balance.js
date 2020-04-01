import React, {useState, useEffect, Fragment, useContext, useCallback} from 'react';
import useApi from "../hooks/useApi";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import {List, Placeholder, Separator} from "@vkontakte/vkui";
import ColoredSum from "./ColoredSum";
import prepare from "../handlers/prepare";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Icon56GoodsCollection from '@vkontakte/icons/dist/56/goods_collection';
import Icon16Up from '@vkontakte/icons/dist/16/up';
import Icon16Down from '@vkontakte/icons/dist/16/down';
import {RouterContext} from "../contexts/routerContext";
import {LoadingContext} from "../contexts/loadingContext";
import Calendar from "../components/Calendar";
import {format} from 'date-fns';

const Balance = () => {
	const [initialFetch, setInitialFetch] = useState(true);
	const [currentDate, setCurrentDate] = useState(new Date());
	// const [dateRange, setDateRange] = useState([
	// 	new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
	// 	new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0),
	// ]);
	const [receipts, setReceipts] = useState([]);
	const [{response}, doApiFetch] = useApi('/day');
	const [, setRouterContext] = useContext(RouterContext);
	const [, setPopout] = useContext(LoadingContext);
	const dateFormat = 'yyyy-MM-dd';

	const setDateFromCalendar = useCallback((date) => {
		setCurrentDate(date);
		setInitialFetch(true);
	}, []);

	useEffect(() => {
		if (!initialFetch) return;
		doApiFetch({
			params: {
				date: format(currentDate, dateFormat)
			}
		});
		setInitialFetch(false);
	}, [initialFetch, setInitialFetch, doApiFetch, setPopout, currentDate]);

	useEffect(() => {
		if (!response) return;
		setReceipts(response);
	}, [response, setPopout]);

	return(
		<Fragment>
			<PanelHeader>Balance</PanelHeader>
			<Placeholder
				icon={<Icon56GoodsCollection />}
				header={<ColoredSum sum={prepare.totalReceiptSum(receipts)} fs={'2em'}/>}
				action={<Button size="l" onClick={()=>{
					setRouterContext(state => ({
						...state,
						panel: 'balance.add'
					}));
				}} data-to={'addnote'}>Добавить доход / расход</Button>}
			>
				Добавляйте доходы/расходы
			</Placeholder>
			<Separator/>
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				paddingTop: '1em',
			}}>
				<div style={{flex: '0 1 50%', display: 'flex',justifyContent: 'flex-end',}}>
					<div style={{display: 'flex', flexDirection: 'column', paddingRight: '10px'}}>
						<span style={{color: '#6F6F6F', fontSize: '0.7em', textAlign: 'end'}}>Доходы</span>
						<ColoredSum sum={prepare.totalSum(receipts, true)} fs={'1.4em'}/>
					</div>
					<Icon16Up width={16} height={40} fill={'#28a745'}/>
				</div>
				<div style={{flex: '0 1 50%', display: 'flex',justifyContent: 'flex-start',}}>
					<Icon16Down width={16} height={40} fill={'#dc3545'}/>
					<div style={{display: 'flex', flexDirection: 'column', paddingLeft: '10px'}}>
						<span style={{color: '#6F6F6F', fontSize: '0.7em'}}>Расходы</span>
						<ColoredSum sum={prepare.totalSum(receipts, false)} fs={'1.4em'}/>
					</div>
				</div>
			</div>

			<Group title='Чеки'>
				<List>
					<Calendar setDateFromCalendar={setDateFromCalendar}/>
					{receipts.map((receipt, index) => {
						return (
							<Cell
								key={index}
								expandable
								onClick={(e) => this.setActiveModal(e.currentTarget.dataset.to)}
								data-to={receipt._id}
								indicator={<ColoredSum sum={receipt.totalSum}/>}
							>
								{prepare.date(receipt.dateTime)}
							</Cell>
						)
					})}
				</List>
			</Group>
		</Fragment>
	)
};

export default Balance;
