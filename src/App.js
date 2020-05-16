import React, {useContext, useState, useEffect, useCallback} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Panel, View, platform, ModalRoot, ModalPage, ModalPageHeader, IOS, Epic, Tabbar, TabbarItem} from "@vkontakte/vkui";
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
import Registration from "./panels/Registration";
import {CurrentUserContext} from "./contexts/currentUser";
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28GraphOutline from '@vkontakte/icons/dist/28/graph_outline';
import Icon28More from '@vkontakte/icons/dist/28/more';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';

const App = () => {
	const [routerContext, dispatch] = useContext(RouterContext);
	const [activeModal, setActiveModal] = useState(null);
	const [modal, setModal] = useState(null);
	const [receipt, setReceipt] = useState(null);
	const [currentUserContext] = useContext(CurrentUserContext);

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

	const onStoryChange = (e) => {
		dispatch({type: 'SET_VIEW', payload: { view: e.currentTarget.dataset.story, panel: e.currentTarget.dataset.panel}});
	}

	const tb = currentUserContext.currentUser && (<Tabbar>
		<TabbarItem
			onClick={onStoryChange}
			selected={routerContext.view === 'balance' && routerContext.panel === 'balance.home'}
			data-story="balance"
			data-panel={'home'}
			text="Баланс"
		><Icon28MarketOutline /></TabbarItem>
		<TabbarItem
			onClick={onStoryChange}
			selected={routerContext.view === 'analytics'}
			data-story="analytics"
			data-panel={'home'}
			text="Аналитика"
		><Icon28GraphOutline /></TabbarItem>
		<TabbarItem
			onClick={onStoryChange}
			selected={routerContext.view === 'balance' && routerContext.panel === 'balance.add'}
			data-story="balance"
			data-panel="add"
			text="Добавить"
		><Icon28AddSquareOutline /></TabbarItem>
		<TabbarItem
			onClick={onStoryChange}
			selected={routerContext.view === 'profile'}
			data-story="profile"
			data-panel={'edit'}
			text="Профиль"
		><Icon28UserOutline /></TabbarItem>
		<TabbarItem
			onClick={onStoryChange}
			selected={routerContext.view === 'more'}
			data-story="more"
			text="Ещё"
		><Icon28More /></TabbarItem>
	</Tabbar>)

	return (
		<Epic activeStory={routerContext.view}
					tabbar={tb}
		>
			<View id={'authorization'} activePanel={routerContext.panel} popout={routerContext.popout}>
				<Panel id={'authorization.login'}>
					<Authorization type={'login'} />
				</Panel>
				<Panel id={'authorization.register'}>
					<Authorization type={'register'} />
				</Panel>
			</View>
			<View id={'profile'} activePanel={routerContext.panel} popout={routerContext.popout}>
				<Panel id={'profile.edit'}>
					<Profile />
				</Panel>
			</View>
			<View id={'registration'} activePanel={routerContext.panel} popout={routerContext.popout}>
				<Panel id={'registration.finish'}>
					<Registration />
				</Panel>
			</View>
			<View id={'balance'} activePanel={routerContext.panel} popout={routerContext.popout} modal={modal}>
				<Panel id={'balance.home'}>
					<Balance
						setReceiptFromBalance={setReceipt}
						onClickActiveModal={setActiveModal}
					/>
				</Panel>
				<Panel id={'balance.add'}>
					<AddDay />
				</Panel>
			</View>
		</Epic>
	);
};

export default App;
