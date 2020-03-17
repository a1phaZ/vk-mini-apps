import { useEffect, useContext } from 'react';
import useApi from "../hooks/useApi";
import { CurrentUserContext } from '../contexts/currentUser';
import useLocalStorage from "../hooks/useLocalStorage";

const CurrentUserChecker = ({ children }) => {
	const [{response}, doFetch] = useApi('/users/profile');
	const [, setCurrentUserState] = useContext(CurrentUserContext);
	const [token] = useLocalStorage('token');

	useEffect(() => {
		if (!token) {
			setCurrentUserState(state => ({
				...state,
				isLoggedIn: false
			}));
			return;
		}
		doFetch();
		setCurrentUserState(state => ({
			...state,
			isLoading: true
		}))
	}, [doFetch, setCurrentUserState, token]);

	useEffect(() => {
		if (!response) return;

		setCurrentUserState(state => ({
			...state,
			isLoading: false,
			isLoggedIn: !!response.user,
			currentUser: response.user || null
		}));

	}, [response, setCurrentUserState]);
	return children;
};

export default CurrentUserChecker;
