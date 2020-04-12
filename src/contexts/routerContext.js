import React, { createContext, useReducer } from 'react';
import {PopoutWrapper, ScreenSpinner} from "@vkontakte/vkui";

const initialState = {
	view: 'authorization',
	panel: 'authorization.login',
	popout: null,
  error: null
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