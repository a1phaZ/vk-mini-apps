import React from 'react';
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";

const MenuItem = ({before, onClick = () => {}, view, mode, title}) => {
	return (
		<Cell
			before={before}
			onClick={onClick}
			data-view={view}
			data-mode={mode}
		>
			{title}
		</Cell>
	)
}

export default MenuItem;
