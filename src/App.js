import React, {useContext, useState, useEffect, useCallback} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Root, Panel, View, platform, ModalRoot, ModalPage, ModalPageHeader, IOS} from "@vkontakte/vkui";
import Authorization from "./panels/Authorization";
import Profile from "./panels/Profile";
import {RouterContext} from "./contexts/routerContext";
import Balance from "./panels/Balance";
import AddDay from "./panels/AddDay";
import Modal from "./components/Modal";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import prepare from "./handlers/prepare";
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Qr from "./panels/Qr";

const App = () => {
	const [routerContext] = useContext(RouterContext);
	const [activeModal, setActiveModal] = useState(null);
	const [modal, setModal] = useState(null);
	const [receipt, setReceipt] = useState(null);

	const modalBack = useCallback(() => {
		setActiveModal(null);
	}, []);

	useEffect(() => {
		if (!receipt) return;
		const osName = platform();
		setModal(
			<ModalRoot activeModal={activeModal} onClose={modalBack}>
				<ModalPage
					id={'modal-page'}
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
					<Modal onClose={modalBack} receipt={receipt}/>
				</ModalPage>
			</ModalRoot>
		);
	}, [receipt, activeModal, modalBack]);

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
						setReceiptFromBalance={setReceipt}
						onClickActiveModal={setActiveModal}
					/>
				</Panel>
				<Panel id={'balance.add'}>
					<AddDay />
				</Panel>
				<Panel id={'balance.qr'}>
					<Qr />
				</Panel>
			</View>
		</Root>
	);
};

export default App;
