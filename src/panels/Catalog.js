import React, {Fragment, useEffect, useState, useReducer} from 'react';
import {
	PanelHeader,
	FixedLayout,
	Group,
	RichCell,
	Button, Input, Separator, PanelHeaderButton, SimpleCell, Switch
} from '@vkontakte/vkui';
import useApi from "../hooks/useApi";
import Icon28EditOutline from '@vkontakte/icons/dist/28/edit_outline';
import Icon16Cancel from '@vkontakte/icons/dist/16/cancel';
import Icon24Filter from '@vkontakte/icons/dist/24/filter';

const initialState = {
	catalog: [],
	filteredCatalog: [],
	catalogToSave: new Set(),
	filterItems: [],
	editedElementId: '',
	openFilter: false,
	filterRules: []
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_CATALOG':

			const filteredCatalogAfterResponse = state.filterRules.map((rule) => {
				return state.catalog.filter((item) => {
					return item.definition === rule && item;
				});
			}).flat();

			return {
				...state,
				catalog: action.payload.catalog,
				filteredCatalog: filteredCatalogAfterResponse && filteredCatalogAfterResponse.length > 0 ? filteredCatalogAfterResponse : action.payload.catalog,
				filterRules: filteredCatalogAfterResponse && filteredCatalogAfterResponse.length > 0 ? state.filterRules : [],
				catalogToSave: new Set(),
				editedElementId: ''
			}
		case 'SET_EDITED_ELEMENT':
			return {
				...state,
				editedElementId: action.payload.id
			}
		case 'FILL_SAVE_CATALOG':
			let element;
			const index = state.catalog.findIndex((item) => {
				return item._id === action.payload.id;
			});
			if (action.payload.definition) {
				element = state.catalog[index];
				element.definition = action.payload.definition;
			}
			const set = new Set(state.catalogToSave);
			set.add(element);
			return {
				...state,
				catalogToSave: set
			}
		case 'ERASE_FILTER_RULES':
			return {
				...state,
				filterRules: [],
				openFilter: false,
				filteredCatalog: state.catalog
			}
		case 'SET_FILTER_ITEMS':
			const filterItems = state.catalog.map(item => {
				return item.definition ? item.definition : '*Нет расшифровки';
			}).reduce((uniq, item) => {
				return uniq.includes(item) ? uniq : [ ...uniq, item ];
			}, []);
			return {
				...state,
				filterItems
			}
		case 'SET_FILTER_RULES':
			let rules = state.filterRules;
			let filteredCatalog = state.filterRules.length > 0 ? state.filteredCatalog : [];
			if (action.payload.checked) {
				rules = [...rules, action.payload.definition];
				const filterByRule = state.catalog.filter((item) => {
					return item.definition === action.payload.definition;
				});
				filteredCatalog = [...filteredCatalog, ...filterByRule];
			} else {
				rules.splice(rules.findIndex((item) => item === action.payload.definition), 1);
			}

			return {
				...state,
				filteredCatalog,
				filterRules: rules
			}
		case 'OPEN_FILTER':
			return {
				...state,
				openFilter: true
			}
		case 'CLOSE_FILTER':
				return {
					...state,
					openFilter: false
				}
		default:
			return state;
	}
}

const Catalog = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [updateStr, setUpdateStr] = useState('');
	const [{response}, doApiFetch] = useApi(`/catalog${updateStr}`);
	const [initialFetch, setInitialFetch] = useState(true);
	const [action] = useState('get');

	const catalogList = state.filteredCatalog.map((item, i) => {
		return (
			<Fragment key={i}>
				<RichCell
					data-id={item._id}
					multiline
					caption={item.name}
					after={<Icon28EditOutline />}
					bottom={
						state.editedElementId === item._id
						&&
						<Input
							id={state.editedElementId}
							type={'text'}
							defaultValue={item.definition}
							placeholder={'Введите расшифровку'}
							onChange={(e) => {
								dispatch({type: 'FILL_SAVE_CATALOG', payload: {id: state.editedElementId, definition: e.target.value}})
							}}
						/>
					}
					onClick={(e) => {
						dispatch({type: 'SET_EDITED_ELEMENT', payload: {id: e.currentTarget.dataset.id}});
					}}
					actions={
						<Fragment>
							<Button disabled style={{display: 'none'}}><Icon16Cancel /></Button>
							<Button disabled style={{display: 'none'}} mode={'secondary'}><Icon16Cancel /></Button>
						</Fragment>
					}>
					<b>{item.definition ? item.definition : 'Нет расшифровки'}</b>
				</RichCell>
			</Fragment>
		)
	});

	const filterList = state.filterItems.map((item, i) => {
		const defaultChecked = state.filterRules.includes(item);
		return(
			<SimpleCell key={i} after={<Switch data-definition={item} onChange={
				(e) => {dispatch({type: 'SET_FILTER_RULES', payload: {checked: e.currentTarget.checked, definition: e.currentTarget.dataset.definition}})}
			} defaultChecked={defaultChecked}/>}>{item}</SimpleCell>
		)
	});

	/**
	 * Задаем фокус на элементе
	 */
	useEffect(() => {
		if(!state.editedElementId) return;
		document.getElementById(state.editedElementId).focus();
	},[state.editedElementId]);

	/**
	 * Обращение к api
	 */
	useEffect(() => {
		if (!updateStr && !initialFetch) return;

		const body = {};
		if (initialFetch) {
			body.params = { a: action }
		}
		if (updateStr) {
			body.method = 'PUT';
			body.update = [...state.catalogToSave];
		}
		doApiFetch(body);
	}, [updateStr, state.catalogToSave, doApiFetch, initialFetch, action]);

	/**
	 * Обрабатываем результат запроса
	 */
	useEffect(() => {
		if (!response) return;
		dispatch({type: 'SET_CATALOG', payload: {catalog: response}});
		dispatch({type: 'SET_FILTER_ITEMS'})
		setUpdateStr('');
		setInitialFetch(false);
	}, [response]);

	const style = {
		paddingTop: state.filterRules.length !== 0 && 60,
		paddingBottom: ([...state.catalogToSave].length !== 0 || (state.filterRules.length !== 0 && state.openFilter)) && 60
	}

	const fixedLayoutStyle = {
		paddingRight: 10,
		paddingLeft: 10
	}

	return (
		<Fragment>
			<PanelHeader
				left={<PanelHeaderButton onClick={() => {
					if (!state.openFilter) {
						dispatch({type: 'OPEN_FILTER'});
					} else {
						dispatch({type: 'CLOSE_FILTER'})
					}

				}}><Icon24Filter /></PanelHeaderButton>}
			>
				Справочник
			</PanelHeader>
			<Group style={style}>
				{!state.openFilter ? catalogList : filterList}
			</Group>

			{state.filterRules.length !== 0 && <FixedLayout style={fixedLayoutStyle} vertical="top">
				<Separator wide/>
				<Button mode="destructive" size={'xl'} onClick={() => {dispatch({type: 'ERASE_FILTER_RULES'})}}>Сбросить фильтр</Button>
			</FixedLayout>}

			{[...state.catalogToSave].length !== 0 && <FixedLayout style={fixedLayoutStyle} vertical="bottom">
				<Separator wide/>
				<Button mode="commerce" size={'xl'} onClick={() => {setUpdateStr('/update')}}>Сохранить изменения</Button>
			</FixedLayout>}

			{state.filterRules.length !== 0 && state.openFilter && <FixedLayout style={fixedLayoutStyle} vertical="bottom">
				<Separator wide/>
				<Button mode="commerce" size={'xl'} onClick={() => {dispatch({type: 'CLOSE_FILTER'})}}>Применить фильтр</Button>
			</FixedLayout>}

		</Fragment>
	)
};

export default Catalog;
