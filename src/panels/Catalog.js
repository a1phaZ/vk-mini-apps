import React, {Fragment, useEffect, useState} from 'react';
import {
	PanelHeader,
	FixedLayout,
	Group,
	RichCell,
	Button, Input, Separator
} from '@vkontakte/vkui';
import useApi from "../hooks/useApi";
import Icon28EditOutline from '@vkontakte/icons/dist/28/edit_outline';

const Catalog = () => {
	const [updateStr, setUpdateStr] = useState('');
	const [{response}, doApiFetch] = useApi(`/catalog${updateStr}`);
	const [catalog, setCatalog] = useState([]);
	const [initialFetch, setInitialFetch] = useState(true);
	const [action, setAction] = useState('get');
	const [editedElementId, setEditedElementId] = useState('');
	const [catalogToSave, setCatalogToSave] = useState(new Set());

	const fillSaveCatalog = (obj) => {
		const set = new Set(catalogToSave);
		set.add(obj);
		setCatalogToSave(set);
	}

	const onClickToEditElement = (e) => {
		const { id } = e.currentTarget.dataset;
		if (editedElementId === '') {
			setEditedElementId(id);
		} else if (editedElementId !== id) {
			setEditedElementId(id);
		}
	}

	const editCatalogElement = (id, definition) => {
		const index = catalog.findIndex((item) => {
			return item._id === id;
		});
		if (definition) {
			const cat = catalog;
			cat[index].definition = definition;
			setCatalog(cat);
			fillSaveCatalog(cat[index]);
		}
	}

	const catalogList = catalog.map((item, i) => {
		return (
			<RichCell
				key={i}
				data-id={item._id}
				multiline
				caption={item.name}
				after={<Icon28EditOutline />}
				bottom={
					editedElementId === item._id
					&&
					<Input
						type={'text'}
						defaultValue={item.definition}
						placeholder={'Введите расшифровку'}
						onChange={async (e) => {
							await editCatalogElement(editedElementId, e.target.value);
						}}
					/>
				}
				onClick={(e) => {onClickToEditElement(e)}}
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
		if (!updateStr) return;
		doApiFetch({

		});
	}, [updateStr]);

	useEffect(() => {
		if (!response) return;
		setCatalog(response);
	}, [response]);

	return (
		<Fragment>
			<PanelHeader>
				Справочник
			</PanelHeader>
			<Group style={{paddingBottom: 60}}>
				{catalogList}
			</Group>

			{[...catalogToSave].length !== 0 && <FixedLayout vertical="bottom">
				<Separator wide/>
				<Button size={'xl'} onClick={() => {console.log('catalogToSave',[...catalogToSave]);}}>Сохранить изменения</Button>
			</FixedLayout>}

		</Fragment>
	)
};

export default Catalog;
