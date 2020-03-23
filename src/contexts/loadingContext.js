import React, { createContext, useState } from 'react';

export const LoadingContext = createContext([{}, p => {}]);

export const LoadingProvider = ({ children }) => {
	const [state, setState] = useState({
		popout: null
	});

	return (
		<LoadingContext.Provider value={[state, setState]}>
			{ children }
		</LoadingContext.Provider>
	)
};
