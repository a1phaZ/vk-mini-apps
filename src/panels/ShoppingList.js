import React, { useReducer, useEffect, Fragment } from 'react';
import {Checkbox, FixedLayout, FormLayout, Group, Input, PanelHeader, Placeholder, SimpleCell} from "@vkontakte/vkui";
import Icon28DeleteOutline from '@vkontakte/icons/dist/28/delete_outline';
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Validation from "../handlers/validation";

const initialState = {
	shoppingList: [],
	shoppingItem: {
		text: '',
		done: false
	},
	date: new Date()
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'INITIAL_SHOPPING_LIST': {
			return {
				...state,
				shoppingList: action.payload.list,
			}
		}
		case 'SET_SHOPPING_ITEM': {
			return {
				...state,
				shoppingItem: {
					text: action.payload.text,
					done: false
				}
			}
		}
		case 'ADD_ITEM': {
			const {shoppingList} = state;
			if (state.shoppingItem.text) {
				return {
					...state,
					shoppingList: [...shoppingList, state.shoppingItem],
					shoppingItem: {
						text: '',
						done: false
					}
				}
			} else {
				return state
			}
		}
		case 'DELETE_ITEM': {
			const { shoppingList } = state;
			shoppingList.splice(action.payload.index, 1);
			if (shoppingList.length === 0) {
				localStorage.removeItem('shoppingList');
			}
			return {
				...state,
				shoppingList
			};
		}
		case 'SET_DONE': {
			const {shoppingList} = state;
			shoppingList[action.payload.index].done = !shoppingList[action.payload.index].done;
			return {
				...state,
				shoppingList
			}
		}

		default:
			return state;
	}
}

const ShoppingList = () => {
	const [list, setList] = useLocalStorage('shoppingList', JSON.stringify([]));
	const [state, dispatch] = useReducer(reducer, initialState);
	const shoppingList = state.shoppingList.map((item, index) => {
		return(
			<SimpleCell key={index} after={<Icon28DeleteOutline data-index={index} onClick={(e) => {dispatch({type: 'DELETE_ITEM', payload: {index: e.currentTarget.dataset.index}})}} />}>
				<Checkbox
					defaultChecked={item.done}
					data-index={index}
					style={{textDecoration: item.done && 'line-through'}}
					onChange={
						(e) => {
							dispatch({type: 'SET_DONE', payload: {index: e.currentTarget.dataset.index}})
						}
					}
				>
					{item.text}
				</Checkbox>
			</SimpleCell>
		)
	});
	useEffect(() => {
		dispatch({type: 'INITIAL_SHOPPING_LIST', payload: { list: JSON.parse(list)}});
	}, [list]);

	useEffect(() => {
		if (state.shoppingList.length === 0) {
			return;
		}
		setList(JSON.stringify(state.shoppingList));
	}, [setList, state]);

	return(
		<Fragment>
			<PanelHeader>Список покупок</PanelHeader>
			<FormLayout
				onSubmit={(e) => {
					e.preventDefault();
					dispatch({type: 'ADD_ITEM'});
				}}
			>
				<Input
					type={'text'}
					top={'Название'}
					name={'shopping-item'}
					value={state.shoppingItem.text}
					onChange={(e) => {dispatch({type: 'SET_SHOPPING_ITEM', payload: {text: Validation.overSize(e, 20)}})}}
					placeholder={'Введите название'}
				/>
				<FixedLayout style={{marginBottom: '1em'}} vertical="bottom">
					<Button
						size="xl"
						disabled={!state.shoppingItem.text}
						mode={"commerce"}
						onClick={() => dispatch({type: 'ADD_ITEM'})}
					>
						Добавить
					</Button>
				</FixedLayout>
			</FormLayout>
			<Group>
				{ state.shoppingList.length > 0
					?
					shoppingList
					:
					<Placeholder>
						<p>Ваш список покупок пуст.</p>
						<p>Заполните Ваш список и <strong>обязательно</strong> воспользуйтесь им в магазине.</p>
						Для добавления элемента введите название и нажмите кнопку "Добавить"
					</Placeholder>
				}
			</Group>

		</Fragment>
	)
}

export default ShoppingList;
