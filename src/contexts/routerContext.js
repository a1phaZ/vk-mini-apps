import React, { createContext, useReducer } from 'react';
import {PopoutWrapper, ScreenSpinner} from "@vkontakte/vkui";

const initialState = {
	view: 'authorization',
	panel: 'authorization.login',
	popout: null,
  error: null,
  password: '',
  confirmPassword: ''
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_VIEW':
			return {
				...state,
				view: action.payload.view,
				panel: `${action.payload.view}.${action.payload.panel}`
			};
		case 'SET_PANEL':
			return {
				...state,
				password: '',
				confirmPassword: '',
				panel: `${state.view}.${action.payload.panel}`
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