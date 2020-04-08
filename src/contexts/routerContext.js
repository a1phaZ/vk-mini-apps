import React, { createContext, useReducer } from 'react';

const initialState = {
	view: 'authorization',
	panel: 'authorization.login'
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