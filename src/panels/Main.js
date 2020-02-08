import React, {Component} from 'react';
import {
	List,
	ModalPage,
	ModalRoot,
	ModalPageHeader,
	IOS,
	platform, Placeholder, Separator
} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import prepare from "../handlers/prepare";
import ColoredSum from "./ColoredSum";
import View from "@vkontakte/vkui/dist/components/View/View";
import Receipt from "./Receipt";
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon56GoodsCollection from '@vkontakte/icons/dist/56/goods_collection';
import Icon16Up from '@vkontakte/icons/dist/16/up';
import Icon16Down from '@vkontakte/icons/dist/16/down';
import AddNote from "./AddNote";
import Info from "./Info";

export default class Main extends Component {
	state = {
		activeModal: null,
		modalHistory: [],
	};

	modalBack = () => {
		this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
	};

	setActiveModal = (activeModal) => {

		activeModal = activeModal || null;
		let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

		if (activeModal === null) {
			modalHistory = [];
		} else if (modalHistory.indexOf(activeModal) !== -1) {
			modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal)+1);
		} else {
			modalHistory.push(activeModal);
		}

		this.setState({
			activeModal,
			modalHistory
		});
	};

	render() {
		const { receipts, fetchedUser, qr, go, popout, id} = this.props;
		const osName = platform();
		const modal = (
			<ModalRoot activeModal={this.state.activeModal}>
				{receipts.map((receipt, index) => {
					return(
						<ModalPage
							key={index}
							id={receipt._id}
							onClose={this.modalBack}
							header={
								<ModalPageHeader
									left={osName !== IOS && <PanelHeaderButton onClick={this.modalBack}><Icon24Cancel /></PanelHeaderButton>}
									right={osName === IOS && <PanelHeaderButton onClick={this.modalBack}>{osName === IOS ? 'Готово' : <Icon24Dismiss />}</PanelHeaderButton>}
								>
									{prepare.date(receipt.dateTime)}
								</ModalPageHeader>
							}
						>
							<List>
								<Receipt id={receipt._id} dateTime={receipt.dateTime} items={receipt.items}/>
							</List>
						</ModalPage>
					)
				})}
			</ModalRoot>
		);

		return (
			<View id={'home'} activePanel={id} popout={popout} modal={modal}>
				<Panel id={'balance'}>
					<PanelHeader>Balance</PanelHeader>
					<Placeholder
						icon={<Icon56GoodsCollection />}
						header={<ColoredSum sum={prepare.totalReceiptSum(receipts)} fs={'2em'}/>}
						action={<Button size="l" onClick={go} data-to={'addnote'}>Добавить доход / расход</Button>}
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
				</Panel>
				<AddNote id={'addnote'} go={go}/>
				<Info id={'info'} />
			</View>
		)
	}

}