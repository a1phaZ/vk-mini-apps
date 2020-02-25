import {useState, useEffect, useCallback} from 'react';
import ApiService from '../services/api';

export default url => {
	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [options, setOptions] = useState({});
	const apiService = new ApiService();

	const doApiFetch = useCallback((options) => {
		setOptions(options);
		setIsLoading(true);
	}, []);

	const { method, token, ...bodyFields} = options;
	useEffect(() => {
		if (!isLoading) {
			return
		}

		apiService.callApi(method, url, bodyFields)
			.then(r => {
				setResponse(r);
				setIsLoading(false);
			})
			.catch(e => {
				setError(e);
				setIsLoading(false);
			});


	}, [isLoading, apiService, bodyFields, method, url]);
	return [{isLoading, response, error}, doApiFetch];
}
