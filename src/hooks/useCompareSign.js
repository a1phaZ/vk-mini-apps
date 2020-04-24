import { useState, useEffect } from 'react';
import qs from 'querystring';
import crypto from 'crypto';

export default () => {
	const [urlParams, setUrlParams] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [vkUserId, setVkUserId] = useState(null);
	const [matchUrlParams, setMatch] = useState(false);

	const setParams = (urlParams = '') => {
		setUrlParams(urlParams);
		setIsLoading(true);
	};

	useEffect(() =>{
		if( !isLoading ) return;

		const params = qs.parse(urlParams);

		if (!params) return;

		setVkUserId(params.vk_user_id);

		const ordered = {};
		Object.keys(params).sort().forEach((key) => {
			if (key.slice(0, 3) === 'vk_') {
				ordered[key] = params[key];
			}
		});

		const stringParams = qs.stringify(ordered);
		const paramsHash = crypto
			.createHmac('sha256', process.env.REACT_APP_VK)
			.update(stringParams)
			.digest()
			.toString('base64')
			.replace(/\+/g, '-')
			.replace(/\//g, '_')
			.replace(/=$/, '');

		setMatch(paramsHash === params.sign);
	}, [isLoading, urlParams]);

	return [{vkUserId, matchUrlParams}, setParams];
}