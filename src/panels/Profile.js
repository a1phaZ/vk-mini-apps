import React, {useState, useEffect} from 'react';
import {
	FormLayout,
	IOS,
	Panel,
	PanelHeader,
	platform,
	Input,
	HeaderButton,
	FormLayoutGroup,
	Group, List, InfoRow, Cell, Button
} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import connect from "@vkontakte/vk-connect";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";

const Profile = ({id, go, fetchedUser}) =>{
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const osName = platform();

	useEffect(()=>{
		connect.subscribe(({ detail: { type, data }}) => {
			switch (type) {
				case 'VKWebAppGetPersonalCardResult':
					setEmail(data.email);
					setPhone(data.phone);
				default:
					break;
			}
		});
	}, []);
	return(
		<Panel id={id} >
			<PanelHeader
				left={<HeaderButton onClick={go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</HeaderButton>}
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
		</Panel>
	)
};

export default Profile;
