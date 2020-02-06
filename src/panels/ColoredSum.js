import React from 'react';
import prepare from "../handlers/prepare";

const ColoredSum = ({sum, fs}) => {
	const stl = sum > 0 ? {color: '#28a745', fontSize: fs} : {color: '#dc3545', fontSize: fs};
	return(
		<span style={stl}>{prepare.sum(sum)}</span>
	)
};

export default ColoredSum;
