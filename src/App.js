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
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28More from '@vkontakte/icons/dist/28/more';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';
import Analytics from "./panels/Analytics";
import More from "./panels/More";
import Catalog from "./panels/Catalog";
import ShoppingList from "./panels/ShoppingList";

const App = () => {
	const [state, dispatch] = useContext(RouterContext);
	const [activeModal, setActiveModal] = useState(null);
	const [modal, setModal] = useState(null);
	const [receipt, setReceipt] = useState(null);

	const modalBack = useCallback(() => {
		setActiveModal(null);
	}, []);

	useEffect(() => {
		window.onpopstate = e => {
			dispatch({type: 'SET_VIEW', payload: {panel: e.state.panel, view: e.state.view}});
		}
	}, [dispatch]);

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

	const tb = state.currentUser && (<Tabbar>
		<TabbarItem
			onClick={onStoryChange}
			selected={state.view === 'balance' && state.panel === 'balance.home'}
			data-story="balance"
			data-panel={'home'}
			text="Баланс"
		><Icon28MarketOutline /></TabbarItem>
		<TabbarItem
			onClick={onStoryChange}
			selected={state.view === 'list'}
			data-story="list"
			data-panel={'list'}
			text="Список покупок"
		><Icon28ListOutline /></TabbarItem>
		<TabbarItem
			onClick={onStoryChange}
			selected={state.view === 'balance' && state.panel === 'balance.add'}
			data-story="balance"
			data-panel="add"
			text="Добавить"
		><Icon28AddSquareOutline /></TabbarItem>
		<TabbarItem
			onClick={onStoryChange}
			selected={state.view === 'profile'}
			data-story="profile"
			data-panel={'edit'}
			text="Профиль"
		><Icon28UserOutline /></TabbarItem>
		<TabbarItem
			onClick={onStoryChange}
			selected={state.view === 'more'}
			data-story="more"
			data-panel={'more'}
			text="Ещё"
		><Icon28More /></TabbarItem>
	</Tabbar>)

	return (
		<Epic activeStory={state.view}
					tabbar={tb}
		>
			<View id={'authorization'} activePanel={state.panel} popout={state.popout}>
				<Panel id={'authorization.login'}>
					<Authorization type={'login'} />
				</Panel>
				<Panel id={'authorization.register'}>
					<Authorization type={'register'} />
				</Panel>
			</View>
			<View id={'profile'} activePanel={state.panel} popout={state.popout}>
				<Panel id={'profile.edit'}>
					<Profile />
				</Panel>
			</View>
			<View id={'balance'} activePanel={state.panel} popout={state.popout} modal={modal}>
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
			<View id={'analytics'} activePanel={state.panel} popout={state.popout}>
				<Panel id={'analytics.home'}>
					<Analytics />
				</Panel>
			</View>
			<View id={'more'} activePanel={state.panel} popout={state.popout}>
				<Panel id={'more.more'}>
					<More />
				</Panel>
				<Panel id={'more.catalog'}>
					<Catalog />
				</Panel>
			</View>
			<View id={'list'} activePanel={state.panel} popout={state.popout}>
				<Panel id={'list.list'}>
					<ShoppingList />
				</Panel>
			</View>
		</Epic>
	);
};

export default App;
