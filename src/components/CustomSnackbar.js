import React, {useState, useEffect, useContext} from 'react';
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import {Snackbar} from "@vkontakte/vkui";
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon28ErrorOutline from '@vkontakte/icons/dist/28/error_outline';
import {RouterContext} from "../contexts/routerContext";

const CustomSnackBar = ({message, isError, onClose}) => {
	const [snackbar, setSnackbar] = useState(null);
	const [, dispatch] = useContext(RouterContext);
	useEffect(() => {
		setSnackbar(<Snackbar
			layout="vertical"
			onClose={onClose}
			before={
				isError
					? <Avatar size={24} style={{backgroundColor: 'var(--destructive)'}}><Icon28ErrorOutline fill="#fff" width={18} height={18} /></Avatar>
					: <Avatar size={24} style={{backgroundColor: 'var(--accent)'}}><Icon16Done fill="#fff" width={18} height={18} /></Avatar>
			}
		>
			{message}
		</Snackbar>)
	}, [setSnackbar, dispatch, isError, message]);
	return(
		snackbar
	)
};

export default CustomSnackBar;
