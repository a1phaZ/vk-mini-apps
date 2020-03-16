import React, {useState, useEffect, Fragment} from 'react';
import {
	FormLayout,
	IOS,
	PanelHeader,
	platform,
	PanelHeaderButton,
	Group, List, InfoRow, Cell, Button
} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import connect from "@vkontakte/vk-connect";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";

const Profile = ({id, go, fetchedUser}) =>{
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');
	const [kktPassword, setKktPassword] = useState('');
	const osName = platform();

	useEffect(()=>{
		connect.subscribe(({ detail: { type, data }}) => {
			switch (type) {
				case 'VKWebAppGetPersonalCardResult':
					setEmail(data.email);
					setPhone(data.phone);
					break;
				default:
					break;
			}
		});
	}, []);
	return(
		<Fragment>
			<PanelHeader
				left={<PanelHeaderButton onClick={go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</PanelHeaderButton>}
			>
				Профиль
			</PanelHeader>
			{fetchedUser &&
			<Group title={fetchedUser.id}>
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>}
			<FormLayout>
				<Group>
					<List>
						<Cell>
							<InfoRow title='E-mail'>
								{email ? email : 'Необходимо получить email'}
							</InfoRow>
						</Cell>
						<Cell>
							<InfoRow title='Телефон'>
								{phone ? phone : 'Необходимо получить телефон'}
							</InfoRow>
						</Cell>
					</List>
				</Group>
				<Button size="xl" level="2" onClick={() => {
					connect.send("VKWebAppGetPersonalCard", {"type": ["phone", "email"]});
				}}>
					Получить данные из VK
				</Button>
			</FormLayout>
		</Fragment>
	)
};

export default Profile;
