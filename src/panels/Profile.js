import React, {useState, useEffect} from 'react';
import {FormLayout, IOS, Panel, PanelHeader, platform, Input, HeaderButton, FormLayoutGroup} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import connect from "@vkontakte/vk-connect";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

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
				<FormLayoutGroup top='E-mail'>
					<Input
						type='email'
						top='E-mail'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.currentTarget.value)}
						status={email ? 'valid' : 'error'}
						bottom={email ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'}
					/>
				</FormLayoutGroup>
				<FormLayoutGroup top='Телефон'>
					<Input
						type='phone'
						top='Телефон'
						name='phone'
						value={phone}
						onChange={(e) => setPhone(e.currentTarget.value)}
						status={phone ? 'valid' : 'error'}
						bottom={phone ? 'Телефон введен верно!' : 'Пожалуйста, введите телефон'}
					/>
				</FormLayoutGroup>
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
