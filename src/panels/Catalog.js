import React, {Fragment, useEffect, useState} from 'react';
import {
	PanelHeader,
	FixedLayout,
	Group,
	RichCell,
	Button
} from '@vkontakte/vkui';
import useApi from "../hooks/useApi";
import Icon28EditOutline from '@vkontakte/icons/dist/28/edit_outline';

const Catalog = () => {
	const [{response}, doApiFetch] = useApi('/catalog');
	const [catalog, setCatalog] = useState([]);
	const [initialFetch, setInitialFetch] = useState(true);
	const [action, setAction] = useState('get');

	const catalogList = catalog.map((item, i) => {
		return (
			<RichCell
				key={i}
				data-id={item._id}
				multiline
				caption={item.name}
				after={<Icon28EditOutline />}
				actions={
					<Fragment>
						<Button>icon1</Button>
						<Button mode={'secondary'}>icon2</Button>
					</Fragment>
				}>
				{item.definition ? item.definition : 'Нет расшифровки'}
			</RichCell>
		)
	});

	useEffect(() => {
		if (!initialFetch) return;
		doApiFetch({
			params: {
				a: action
			}
		});
		setInitialFetch(false);
	}, [initialFetch, setInitialFetch, doApiFetch, action]);

	useEffect(() => {
		if (!response) return;
		setCatalog(response);
	}, [response]);

	return (
		<Fragment>
			<PanelHeader>
				Справочник
			</PanelHeader>
			<Group>
				{catalogList}
			</Group>
			{catalog.length === 0 && <FixedLayout vertical="top">
				{/*<Separator wide/>*/}
				<Button onClick={() => {setAction('fill')}}>Заполнить справочник</Button>
			</FixedLayout>}
		</Fragment>
	)
};

export default Catalog;
