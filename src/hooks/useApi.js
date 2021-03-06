import { useState, useEffect, useCallback, useContext } from 'react';
import useLocalStorage from "./useLocalStorage";
import queryString from 'query-string';
import {RouterContext} from "../contexts/routerContext";

export default url => {
	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [options, setOptions] = useState({});
	const [token] = useLocalStorage('token');
	const [,dispatch] = useContext(RouterContext);
	const _apiBase = process.env.NODE_ENV !== 'development' ? process.env.REACT_APP_BASEURL : process.env.REACT_APP_BASEURL_DEV;
	// const _apiBase = `https://35.238.182.107:8080/api`; `http://localhost:3000/api`

	const doApiFetch = useCallback((options = {}) => {
		setOptions(options);
		setResponse(null);
		setIsLoading(true);
		dispatch({ type: 'SHOW_LOADING' });
	}, [dispatch]);

	const { method = 'GET', params, ...bodyFields} = options;
	useEffect(() => {
		if (!isLoading) {
			return
		}

		const headers = {
			'Content-Type': 'application/json',
			Authorization: token ? `Token ${token}` : '',
		};

		const qString = params ? queryString.stringify(params) : null;

		const uri = qString ? `${_apiBase}${url}?${qString}` : `${_apiBase}${url}`;

		const fetchData = async () => {
			await fetch(uri, {
				method,
				mode: 'cors',
				headers,
				body: method !== 'GET' ? JSON.stringify(bodyFields) : null,
			})
				.then(res => {
					// console.log(res.json());
					// if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(r => {
					if (r.error) {throw Error(r.error.message);}
					setIsLoading(false);
					dispatch({ type: 'HIDE_LOADING' });
					setResponse(r);
				})
				.catch(e => {
					setIsLoading(false);
					dispatch({ type: 'HIDE_LOADING' });
					dispatch({type: 'SET_ERROR', payload: {error: e}});
					setError(e);
				});
		};

		fetchData();
	}, [isLoading, bodyFields, method, url, _apiBase, token, params, dispatch]);
	return [{isLoading, response, error}, doApiFetch];
}
