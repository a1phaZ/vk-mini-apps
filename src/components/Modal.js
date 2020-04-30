import React from 'react';
import {List} from "@vkontakte/vkui";
import Receipt from "./Receipt";

const Modal = ({receipt}) => {
	return (
		<List>
			<Receipt id={receipt._id} dateTime={receipt.dateTime} items={receipt.items}/>
		</List>
	)
};

export default Modal;