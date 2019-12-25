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

const Profile = ({id, go}) =>{
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
