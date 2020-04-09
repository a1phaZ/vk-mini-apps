import React, {useContext, useState, useEffect} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Root, Panel, View, platform, ModalRoot, ModalPage, ModalPageHeader, IOS, List} from "@vkontakte/vkui";
import Authorization from "./panels/Authorization";
import Profile from "./panels/Profile";
import {RouterContext} from "./contexts/routerContext";
import Balance from "./panels/Balance";
import AddDay from "./panels/AddDay";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import prepare from "./handlers/prepare";
import Receipt from "./panels/Receipt";
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';

const App = () => {
	const [routerContext] = useContext(RouterContext);
	const [activeModal, setActiveModal] = useState(null);
	const [modal, setModal] = useState(null);
	const [receipts, setReceipts] = useState(null);

	const modalBack = () => {
		setActiveModal(null);
	}

	useEffect(() => {
		if (!receipts) return;
		const osName = platform();
		setModal(
			<ModalRoot activeModal={activeModal} onClose={modalBack}>
				{receipts.map((receipt, index) => {
					return(
						<ModalPage
							key={index}
							id={receipt._id}
							onClose={modalBack}
							header={
								<ModalPageHeader
									left={osName !== IOS && <PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}
									right={osName === IOS && <PanelHeaderButton onClick={modalBack}>{osName === IOS ? 'Готово' : <Icon24Dismiss />}</PanelHeaderButton>}
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
	}, [receipts, activeModal]);

	return (
		<Root activeView={routerContext.view} popout={routerContext.popout} modal={modal} onTransition={null}>
			<View id={'authorization'} activePanel={routerContext.panel}>
				<Panel id={'authorization.login'}>
					<Authorization type={'login'} />
				</Panel>
				<Panel id={'authorization.register'}>
					<Authorization type={'register'} />
				</Panel>
			</View>
			<View id={'profile'} activePanel={routerContext.panel}>
				<Panel id={'profile.edit'}>
					<Profile />
				</Panel>
			</View>
			<View id={'balance'} activePanel={routerContext.panel} >
				<Panel id={'balance.home'}>
					<Balance
						setReceiptsFromBalance={setReceipts}
						onClickActiveModal={setActiveModal}
					/>
				</Panel>
				<Panel id={'balance.add'}>
					<AddDay />
				</Panel>
			</View>
		</Root>
	);
};

export default App;
