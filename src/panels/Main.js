import React, {useState, useEffect, useContext} from 'react';
import {CurrentUserContext} from "../contexts/currentUser";
import useApi from "../hooks/useApi";

const Main = () => {
	const [currentUserState] = useContext(CurrentUserContext);
	const currentDate = new Date();
	const [dateRange, setDateRange] = useState([
		new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
		new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0),
	]);
	const [receipts, setReceipts] = useState([]);
	const {isLoading, isLoggedIn,	currentUser} = currentUserState;
	const [apiResponse, doApiFetch] = useApi('/day');

	console.log({currentUser});
	console.log({dateRange});

	useEffect(() => {
		if (!currentUser || !isLoggedIn) return;
		doApiFetch({
			method: 'GET'
		});
		console.log(apiResponse);

	}, [currentUser, isLoggedIn]);

	return(
		<div>Main</div>
	)
};

export default Main;
