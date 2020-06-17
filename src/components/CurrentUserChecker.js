import { useEffect, useContext } from 'react';
import useApi from "../hooks/useApi";
import { RouterContext } from "../contexts/routerContext";
import useLocalStorage from "../hooks/useLocalStorage";

const CurrentUserChecker = ({ children }) => {
	const [{response}, doFetch] = useApi('/users/profile');
	const [findUser, doFindFetch] = useApi('/users/find')
	const [state, dispatch] = useContext(RouterContext);
	const [token] = useLocalStorage('token');

	useEffect(() => {
		if (!token && state.vkUser.matchUrlParams && state.vkUser.id) {
			doFindFetch({
				params: {
					id: state.vkUser.id
				}
			});
			dispatch({type: 'SHOW_LOADING'});
		}
	}, [token, state.vkUser.matchUrlParams, state.vkUser.id, dispatch, doFindFetch]);

	useEffect(() => {
		if (!findUser.response) return;
		if (findUser.response.result) {
			dispatch({type: 'SET_VIEW', payload: { view: 'authorization', panel: 'login'}})
		} else {
			dispatch({type: 'SET_VIEW', payload: { view: 'authorization', panel: 'register'}})
		}
		dispatch({type: 'HIDE_LOADING'});
	}, [findUser.response, dispatch]);

	useEffect(() => {
		if (!token || !state.vkUser.matchUrlParams) {
			dispatch({type: 'SET_USER', payload: { user: null, isLoggedIn: false}});
			return;
		}
		doFetch();
		dispatch({type: 'SHOW_LOADING'});
	}, [doFetch, token, state.vkUser.matchUrlParams, dispatch]);

	useEffect(() => {
		if (!response) return;

		const user = response.user.vk_id.toString() === state.vkUser.id ? response.user : null;

		dispatch({type: 'SET_USER', payload: { user: user, isLoggedIn: !!user}});

	}, [response, state.vkUser.id, dispatch ]);
	return children;
};

export default CurrentUserChecker;
