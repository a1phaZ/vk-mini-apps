import React from 'react';
import prepare from "../handlers/prepare";

const ColoredSum = ({sum}) => {
	const stl = sum > 0 ? {color: '#28a745'} : {color: '#dc3545'};
	return(
		<span style={stl}>{prepare.sum(sum)}</span>
	)
};

export default ColoredSum;
