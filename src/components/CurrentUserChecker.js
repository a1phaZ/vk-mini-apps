import { useEffect, useContext } from 'react';
import useApi from "../hooks/useApi";
import { CurrentUserContext } from '../contexts/currentUser';
import { AppSignContext } from "../contexts/appSign";
import useLocalStorage from "../hooks/useLocalStorage";

const CurrentUserChecker = ({ children }) => {
	const [{response}, doFetch] = useApi('/users/profile');
	const [, setCurrentUserState] = useContext(CurrentUserContext);
	const [{vkUserId, matchUrlParams}] = useContext(AppSignContext);
	const [token] = useLocalStorage('token');

	useEffect(() => {
		if (!token || !matchUrlParams) {
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
	}, [doFetch, setCurrentUserState, token, matchUrlParams]);

	useEffect(() => {
		if (!response) return;

		const user = response.user.vk_id.toString() === vkUserId ? response.user : null;

		setCurrentUserState(state => ({
			...state,
			isLoading: false,
			isLoggedIn: !!user,
			currentUser: user
		}));

	}, [response, setCurrentUserState, vkUserId]);
	return children;
};

export default CurrentUserChecker;
