import React, { useEffect } from 'react';
import connect from "@vkontakte/vk-connect";

const InstallingTheme = ({ children }) => {

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
	}, []);

	return (children)
};

export default InstallingTheme;
