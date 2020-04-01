import { useState, useEffect, useCallback } from 'react';
import useLocalStorage from "./useLocalStorage";
import queryString from 'query-string';

export default url => {
	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [options, setOptions] = useState({});
	const [token] = useLocalStorage('token');
	const _apiBase = `http://localhost:3000/api`;
	// const _apiBase = `http://35.238.182.107:8080/api`;

	const doApiFetch = useCallback((options = {}) => {
		setOptions(options);
		setIsLoading(true);

	}, []);

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

		fetch(uri, {
			method,
			mode: 'cors',
			headers,
			body: method !== 'GET' ? JSON.stringify(bodyFields) : null,
		})
			.then(res => res.json())
			.then(r => {
				setIsLoading(false);
				setResponse(r);
			})
			.catch(e => {
				setIsLoading(false);
				setError(e);
			});
	}, [isLoading, bodyFields, method, url, _apiBase, token, params]);
	return [{isLoading, response, error}, doApiFetch];
}
