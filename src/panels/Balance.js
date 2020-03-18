import React, {useState, useEffect, Fragment} from 'react';
import useApi from "../hooks/useApi";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
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

const Balance = ({ loadIndicator }) => {
	const [initialFetch, setInitialFetch] = useState(true);
	const currentDate = new Date();
	const [dateRange, setDateRange] = useState([
		new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
		new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0),
	]);
	const [receipts, setReceipts] = useState([]);
	const [{response, error}, doApiFetch] = useApi('/day');

	useEffect(() => {
		if (!initialFetch) return;
		// if (!currentUser || !isLoggedIn) return;
		doApiFetch();
		loadIndicator(<ScreenSpinner size='large' />);
		setInitialFetch(false);
	}, [initialFetch, setInitialFetch, doApiFetch, loadIndicator]);

	useEffect(() => {
		if (!response) return;
		setReceipts(response);
		loadIndicator(null);
	}, [response, loadIndicator]);

	return(
		<Fragment>
			<PanelHeader>Balance</PanelHeader>
			<Placeholder
				icon={<Icon56GoodsCollection />}
				header={<ColoredSum sum={prepare.totalReceiptSum(receipts)} fs={'2em'}/>}
				action={<Button size="l" onClick={()=>{}} data-to={'addnote'}>Добавить доход / расход</Button>}
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
