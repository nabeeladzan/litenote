import { useState, useEffect, useRef } from "react";
import Panel from "../arb_panels";

export default function ARBmenuoption({
	children,
	text,
	color,
	backgroundColor,
	hovercolor,
	hoverBackgroundColor,
}) {
	const [textColor, setTextColor] = useState(color ? color : "black");
	const [bgColor, setBGColor] = useState(
		backgroundColor ? backgroundColor : "transparent"
	);
	const hoverColor = hovercolor ? hovercolor : "black";
	const hoverBGColor = hoverBackgroundColor ? hoverBackgroundColor : "silver";

	const [showSubmenu, setShowSubmenu] = useState(false);

	const menuOption = useRef(null);

	const handleHover = (event) => {
		switch (event.type) {
			case "mouseenter":
				setTextColor(hoverColor);
				setBGColor(hoverBGColor);
				if (children) {
					setShowSubmenu(true);
				}
				break;

			case "mouseleave":
				setTextColor(hovercolor);
				setBGColor(backgroundColor);
				setShowSubmenu(false);
				break;
		}
	};

	const options = children ? children : null;

	return (
		<div
			ref={menuOption}
			style={{
				paddingLeft: "4px",
				paddingRight: "4px",
				margin: 0,
				color: textColor,
				backgroundColor: bgColor,
				lineHeight: "1.75",
				cursor: "default",
				transitionDuration: "70ms",
			}}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
		>
			{text}
			{showSubmenu ? <Subpanel parent={menuOption}>{options}</Subpanel> : ""}
		</div>
	);
}

function Subpanel(props) {
	const [offsetLeft, setOffsetLeft] = useState();

	useEffect(() => {
		if (props.parent.current) {
			const right = props.parent.current.offsetLeft;
			setOffsetLeft(`${right}px`);
		}
	}, []);

	return (
		<Panel
			style={{
				minWidth: "23vw",
				position: "fixed",
				marginTop: "2px",
				left: offsetLeft,
				boxShadow: "0 4px 3px rgba(0, 0, 0, 0.1)",
				borderRadius: "0 0 2px 2px", // Add this line to set the border-radius
			}}
		>
			{props.children}
		</Panel>
	);
}
