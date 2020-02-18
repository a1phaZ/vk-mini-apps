import {useState, useEffect} from 'react';
import axios from 'axios';

export default url => {
	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [options, setOptions] = useState({});
	const _apiBase = `http://localhost:3000/api`;

	const doApiFetch = (options) => {
		setOptions(options);
		setIsLoading(true);
	};

	const { method, token, ...bodyFields} = options;
	const headers = {
		'Content-Type': 'application/json',
		Authorization: token ? `Token ${token}` : '',
	};

	useEffect(() => {
		if (!isLoading) {
			return
		}

		async function fetchDataFromApi() {
			return await axios({
				method,
				url: `${_apiBase}${url}`,
				mode: 'cors',
				headers,
				data: method !== 'GET' ? JSON.stringify(bodyFields) : null,
				withCredentials: 'true'
			})
				//.then(res => res.json());
		}
		fetchDataFromApi()
			.then(data => setResponse(data))
			.catch(error => setError(error));

	}, [isLoading]);

	console.log({response});
	return [{isLoading, response, error}, doApiFetch];
}
