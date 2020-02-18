import { useState, useEffect } from 'react';

export default method => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [options, setOptions] = useState({});

	const doVKFetch = (options = {}) => {
		setOptions(options);
		setIsLoading(true);
	};

	useEffect(() => {
		if (!isLoading) {
			return
		}

		setResponse({
			id: '1',
			first_name: 'Artemiy',
			last_name: 'Zebzeev',
		});

	}, [isLoading]);

	return [{response, error, isLoading}, doVKFetch];
}
