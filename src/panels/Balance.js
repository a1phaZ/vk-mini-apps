import React, {useState, useEffect, Fragment, useContext, useCallback} from 'react';
import useApi from "../hooks/useApi";
import {List, PanelHeaderContent, Placeholder, PullToRefresh, Separator, Counter, Alert} from "@vkontakte/vkui";
import ColoredSum from "../components/ColoredSum";
import prepare from "../handlers/prepare";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Icon56GoodsCollection from '@vkontakte/icons/dist/56/goods_collection';
import Icon16Up from '@vkontakte/icons/dist/16/up';
import Icon16Down from '@vkontakte/icons/dist/16/down';

import {RouterContext} from "../contexts/routerContext";
import Calendar from "../components/Calendar";
import {format} from 'date-fns';
import SearchComponent from "../components/search";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";

const Balance = ({setReceiptFromBalance, onClickActiveModal}) => {
	const viewTitle = 'Баланс';
	const [initialFetch, setInitialFetch] = useState(true);
	const [currentDate, setCurrentDate] = useState(new Date());
	const [receipts, setReceipts] = useState([]);
	const [fetching, setFetching] = useState(false);
	const [{response}, doApiFetch] = useApi('/day');
	const [, dispatch] = useContext(RouterContext);
	const dateFormat = 'yyyy-MM-dd';

	const setDateFromCalendar = useCallback((date) => {
		setCurrentDate(date);
		setInitialFetch(true);
	}, []);

	const onRefresh = () => {
		setFetching(true);
		setInitialFetch(true);
	}

	useEffect(() => {
		if (!initialFetch) return;
		doApiFetch({
			params: {
				date: format(currentDate, dateFormat)
			}
		});
		setInitialFetch(false);
		setFetching(false);
	}, [initialFetch, setInitialFetch, doApiFetch, currentDate]);

	useEffect(() => {
		if (!response) return;
		setReceipts(response);
	}, [response]);

	useEffect(() => {
		if (!response) return;
		if (!!response.length || !!receipts.length) return;
		if (currentDate.getMonth() !== new Date().getMonth()) return;
		const popout = (
			<Alert
				actions={[{
					title: 'Отмена',
					autoclose: true,
					mode: 'cancel'
				}, {
					title: 'Добавить остаток',
					autoclose: true,
					action: () => dispatch({type: 'SET_PANEL', payload: { panel: 'add'}})
				}]}
				onClose={() => dispatch({type: 'SET_POPOUT', payload: { popout: null }})}
			>
				<h2>За текущий месяц данных нет</h2>
        <p>Добавьте остаток денежных средств, для правильной калькуляции баланса</p>
      </Alert>
		)
		dispatch({type: 'SET_POPOUT', payload: { popout: popout }});
	}, [receipts.length, dispatch, response]);

	return(
		<Fragment>
			<PanelHeader>
				<PanelHeaderContent
					aside={<Counter size={'s'} mode={'primary'}>{process.env.REACT_APP_VERSION}</Counter>}
					//aside={<Icon16Dropdown style={{ transform: `rotate(${contextOpened ? '180deg' : '0'})` }} />}
					// onClick={toggleContext}
				>
					{viewTitle}
				</PanelHeaderContent>
			</PanelHeader>
			{/*<MainMenu title={viewTitle} />*/}
			<SearchComponent receipts={receipts} />
			<Placeholder
				icon={<Icon56GoodsCollection />}
				header={<ColoredSum sum={prepare.totalReceiptSum(receipts)} fs={'2em'}/>}
				action={<Button size="l" onClick={(e)=>{
					dispatch({type: 'SET_PANEL', payload: { panel: e.currentTarget.dataset.to}});
				}} data-to={'add'}>Добавить доход / расход</Button>}
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
			<PullToRefresh onRefresh={onRefresh} isFetching={fetching} >
				<Group title='Чеки'>
					<List>
						<Calendar setDateFromCalendar={setDateFromCalendar}/>
						{receipts.map((receipt, index) => {
							return (
								<Cell
									key={index}
									expandable
									onClick={() => {
										onClickActiveModal('modal-page');
										setReceiptFromBalance(receipt);
									}}
									data-to={receipt._id}
									indicator={<ColoredSum sum={receipt.totalSum}/>}
								>
									{prepare.date(receipt.dateTime)}
								</Cell>
							)
						})}
					</List>
				</Group>
			</PullToRefresh>
		</Fragment>
	)
};

export default Balance;
