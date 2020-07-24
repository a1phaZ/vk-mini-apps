import React, { createContext, useReducer } from 'react';
import {PopoutWrapper, ScreenSpinner} from "@vkontakte/vkui";
import {historyPush} from "../handlers/history";

const initialState = {
	view: 'authorization',
	panel: 'authorization.login',
	popout: null,
  error: null,
  password: '',
  confirmPassword: '',
	vkUser: {
		id: null,
		matchUrlParams: false
	},
	currentUser: null,
	isLoggedIn: false,
	receipts: [],
	item: null,
	currentDate: new Date(),
	modal: null
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_VIEW':
			historyPush(action.payload.view, action.payload.panel);
			return {
				...state,
				view: action.payload.view,
				panel: `${action.payload.view}.${action.payload.panel}`,
				item: null
			};
		case 'SET_PANEL':
			historyPush(state.view, action.payload.panel);
			return {
				...state,
				password: '',
				confirmPassword: '',
				panel: `${state.view}.${action.payload.panel}`,
				item: null
			};
		case 'SHOW_LOADING':
			return {
				...state,
				popout: (
					<PopoutWrapper>
						<ScreenSpinner />
					</PopoutWrapper>
				)
			};
		case 'HIDE_LOADING':
			return {
				...state,
				popout: null
			};
		case 'SET_POPOUT':
			return {
				...state,
				popout: action.payload.popout
			}
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload.error
      }
    case 'UNSET_ERROR' :
      return {
        ...state,
        error: null
      }
    case 'SET_PASSWORD':
			return {
				...state,
				password: state.password.length < 4 ? state.password+action.payload.digit : state.password
			}
		case 'SET_CONFIRM_PASSWORD':
			return {
				...state,
				confirmPassword: state.confirmPassword.length < 4 ? state.confirmPassword+action.payload.digit : state.confirmPassword
			}
		case 'UNSET_PASSWORD':
			return {
				...state,
				password: '',
				confirmPassword: ''
			}
		case 'SET_VK_USER':
			return {
				...state,
				vkUser: {
					id: action.payload.id,
					matchUrlParams: action.payload.match
				}
			}
		case 'SET_USER':
			return {
				...state,
				currentUser: action.payload.user,
				isLoggedIn: action.payload.isLoggedIn,
			}
		case 'SET_RECEIPTS':
			return {
				...state,
				receipts: action.payload.receipts,
			}
		case 'SET_DATE':
			return {
				...state,
				currentDate: action.payload.date
			}
		case 'SET_ITEM_TO_EDIT':
			historyPush('balance', 'balance.add');
			return {
				...state,
				item: action.payload.item,
				view: 'balance',
				panel: 'balance.add',
				modal: null
			}
		case 'HIDE_MODAL':
			return {
				...state,
				modal: null
			}
		case 'SHOW_MODAL':
			return {
				...state,
				modal: action.payload.modal
			}
		case 'LOGOUT':
			return {
				...state,
				view: 'authorization',
				panel: 'authorization.login',
				popout: null,
				error: null,
				password: '',
				confirmPassword: '',
				currentUser: null,
				isLoggedIn: false,
				receipts: [],
				item: null,
				currentDate: new Date(),
				modal: null
			}
		default:
			return state;
	}
};

export const RouterContext = createContext();

export const RouterContextProvider = ({ children }) => {
	const value = useReducer(reducer, initialState);
	return (
		<RouterContext.Provider value={value}>
			{children}
		</RouterContext.Provider>
	)
};