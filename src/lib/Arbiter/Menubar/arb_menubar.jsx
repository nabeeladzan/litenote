import React from "react";

export default function ARBmenubar(props) {
	const handleContextMenu = (event) => {
		event.preventDefault();
	};

	return (
		<nav
			style={{
				backgroundColor: "#F3F3F3",
				height: "30px",
				display: "flex",
				userSelect: "none",
			}}
			onContextMenu={handleContextMenu}
		>
			{props.children}
		</nav>
	);
}
