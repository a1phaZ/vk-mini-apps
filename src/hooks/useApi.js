import {useState, useEffect} from 'react';

export default url => {
	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

	const doApiFetch = () => {

	};

	return [{isLoading, response, error}, doApiFetch];
}
