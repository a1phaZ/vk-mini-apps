import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import connect from "@vkontakte/vk-connect";
import prepare from "../handlers/prepare";

const Home = ({ id, go, fetchedUser, qr, receipts }) => {
	return (
		<Panel id={id}>
			<PanelHeader>Баланс</PanelHeader>
			{fetchedUser &&
			<Group title="User Data Fetched with VK Connect">
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>}

			<Group title='Чеки'>
				<List>
					{receipts.map((receipt, index) => {
						return (<Cell key={index} expandable onClick={go} data-to={receipt._id} indicator={receipt.totalSum / 100}>{prepare.date(receipt.dateTime)}</Cell>)
					})}
				</List>
			</Group>

			<Group title="Profile">
				<Div>
					<Button size="xl" level="2" onClick={go} data-to="profile">
						Profile
					</Button>
				</Div>
			</Group>

			<Group title="QR Reader">
				<Div>
					<Button size="xl" level="2" onClick={() => {
						connect.send("VKWebAppOpenCodeReader", {});
					}}>
						Open QR reader
					</Button>
					<div>
						<ul>
							<li>{`qr.dt = ${qr.dt}`}</li>
							<li>{`qr.sum = ${qr.sum}`}</li>
							<li>{`qr.fn = ${qr.fn}`}</li>
							<li>{`qr.i = ${qr.i}`}</li>
							<li>{`qr.fp = ${qr.fp}`}</li>
						</ul>
					</div>
				</Div>
			</Group>
		</Panel>
	)
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
