import { useEffect } from 'react';
import bridge from "@vkontakte/vk-bridge";

const InstallingTheme = ({ children }) => {

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
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
