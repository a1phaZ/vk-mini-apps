import React, {Component} from 'react';
import {
	List,
	ModalPage,
	ModalRoot,
	ModalPageHeader,
	HeaderButton,
	IOS,
	platform
} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import connect from "@vkontakte/vk-connect";
import prepare from "../handlers/prepare";
import ColoredSum from "./ColoredSum";
import View from "@vkontakte/vkui/dist/components/View/View";
import Receipt from "./Receipt";
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';

export default class Home extends Component {
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
									left={osName !== IOS && <HeaderButton onClick={this.modalBack}><Icon24Cancel /></HeaderButton>}
									right={osName === IOS && <HeaderButton onClick={this.modalBack}>{osName === IOS ? 'Готово' : <Icon24Dismiss />}</HeaderButton>}
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
			<View id='home' activePanel='home' popout={popout} modal={modal}>
				<Panel id={id}>
					<PanelHeader>Баланс</PanelHeader>
					{fetchedUser &&
					<Group title="User Data Fetched with VK Connect">
						<Cell
							before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
							description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
						>
							{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
						</Cell>
					</Group>}

					<Group title='Баланс'>
						<Div style={{fontSize: '200%', fontWeight: 'bold'}}>
							<ColoredSum sum={prepare.totalReceiptSum(receipts)} />
						</Div>
					</Group>

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

					<Group title="Profile">
						<Div>
							<Button size="xl" level="2" onClick={go} data-to="profile">
								Profile
							</Button>
						</Div>
					</Group>

					<Group title="QR Reader">
						<Div>
							<Button size="xl" level="2" onClick={() => {
								connect.send("VKWebAppOpenCodeReader", {});
							}}>
								Open QR reader
							</Button>
							<div>
								<ul>
									<li>{`qr.dt = ${qr.dt}`}</li>
									<li>{`qr.sum = ${qr.sum}`}</li>
									<li>{`qr.fn = ${qr.fn}`}</li>
									<li>{`qr.i = ${qr.i}`}</li>
									<li>{`qr.fp = ${qr.fp}`}</li>
								</ul>
							</div>
						</Div>
					</Group>
				</Panel>
			</View>
		)
	}

}