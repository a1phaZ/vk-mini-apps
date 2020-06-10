import React, { useContext } from 'react';
import { Button } from "@vkontakte/vkui";
import {RouterContext} from "../contexts/routerContext";
import Icon28BackspaceOutline from '@vkontakte/icons/dist/28/backspace_outline';
import './dialer.component.css';


const Dialer = ({confirm = false}) => {
	const [, dispatch] = useContext(RouterContext);
	const digits = [
		{item: '1'}, 
		{item: '2'},
		{item: '3'},
		{item: '4'},
		{item: '5'},
		{item: '6'},
		{item: '7'},
		{item: '8'},
		{item: '9'},
		{item: null},
		{item: '0'},
		{
			item: <Icon28BackspaceOutline />,
			onClick: () => {dispatch({type: 'UNSET_PASSWORD'})},
			mode: 'destructive'
		}
	]
	// const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', null, '0', ];
	const onClick = (e) => {
		if (confirm) {
			dispatch({type: 'SET_CONFIRM_PASSWORD', payload: {digit: e.currentTarget.dataset.digit}})
		} else {
			dispatch({type: 'SET_PASSWORD', payload: {digit: e.currentTarget.dataset.digit}})	
		}
	}
	const dialer = digits.map((digit, index) => {
		return (
			<div className='digit' key={index}>
				{
					digit.item  
					 && 
					<Button 
						size='xl' 
						mode={digit.mode || 'secondary'} 
						data-digit={digit.item} 
						onClick={digit.onClick || onClick}
					>
						<b>{digit.item}</b>
					</Button>
				}
			</div>
		)
	});

	return (
		<div className='dialer'>
			{dialer}
		</div>
	)
}

export default Dialer;