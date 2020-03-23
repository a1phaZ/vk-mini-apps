import React, {useState, useEffect, useCallback, useContext} from 'react';
import useLocalStorage from "./useLocalStorage";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import {LoadingContext} from "../contexts/loadingContext";

export default url => {
	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [options, setOptions] = useState({});
	const [token] = useLocalStorage('token');
	const [, setPopout] = useContext(LoadingContext);
	//const _apiBase = `http://localhost:3000/api`;
	const _apiBase = `http://35.238.182.107:8080/api`;

	const doApiFetch = useCallback((options = {}) => {
		setOptions(options);
		setIsLoading(true);
		setPopout(state => ({
			...state,
			popout: <ScreenSpinner size='large' />
		}));
	}, [setPopout]);

	const { method = 'GET', ...bodyFields} = options;
	useEffect(() => {
		if (!isLoading) {
			return
		}

		const headers = {
			'Content-Type': 'application/json',
			Authorization: token ? `Token ${token}` : '',
		};

		fetch(`${_apiBase}${url}`, {
			method,
			mode: 'cors',
			headers,
			body: method !== 'GET' ? JSON.stringify(bodyFields) : null,
		})
			.then(res => res.json())
			.then(r => {
				setIsLoading(false);
				setResponse(r);
				setPopout(state => ({
					...state,
					popout: null
				}));
			})
			.catch(e => {
				setIsLoading(false);
				setError(e);
				setPopout(state => ({
					...state,
					popout: null
				}));
			});
	}, [isLoading, bodyFields, method, url, _apiBase, token, setPopout]);
	return [{isLoading, response, error}, doApiFetch];
}
