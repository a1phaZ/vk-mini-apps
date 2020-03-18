import React, { createContext, useState } from 'react';

export const RouterContext = createContext([{}, p => {}]);

export const RouterContextProvider = ({ children }) => {
	const [state, setState] = useState({
		view: 'authorization',
		panel: 'authorization.register'
	});

	return (
		<RouterContext.Provider value={[state, setState]}>
			{children}
		</RouterContext.Provider>
	)
};