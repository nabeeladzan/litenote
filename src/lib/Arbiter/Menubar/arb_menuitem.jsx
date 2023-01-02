import { useState } from "react";

export default function ARBmenuitem({ onClick, text, sidetext }) {
	const isPageBreak = text == "#break" ? true : false;
	const [backgroundColor, setBackgroundColor] = useState("#F3F3F3");

	const handleHover = (event) => {
		switch (event.type) {
			case "mouseenter":
				if (!isPageBreak) {
					setBackgroundColor("silver");
				}

				break;

			case "mouseleave":
				setBackgroundColor("#F3F3F3");
				break;
		}
	};

	return (
		<div
			onClick={onClick}
			style={{
				justifyContent: "space-between",
				width: "94%",
				minWidth: "94%",
				display: "flex",
				paddingLeft: "3%",
				paddingRight: "3%",
				borderRadius: "2px",
				backgroundColor: isPageBreak ? "gray" : backgroundColor,
				marginTop: isPageBreak ? "5px" : 0,
				marginBottom: isPageBreak ? "5px" : 0,
			}}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
		>
			<span
				style={{
					visibility: isPageBreak ? "hidden" : "visible",
					fontSize: isPageBreak ? "1px" : "80%",
					lineHeight: "1.7",
				}}
			>
				{text}
			</span>
			<span style={{ color: "gray", fontSize: "70%" }}>{sidetext}</span>
		</div>
	);
}
