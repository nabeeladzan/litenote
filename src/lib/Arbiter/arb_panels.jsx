export default function Panel(props) {
	return (
		<div
			style={{
				backgroundColor: "#F3F3F3",
				borderRadius: "2px",
				padding: "4px",
				position: "fixed",
				zIndex: "10",
				...props.style,
			}}
		>
			{props.children}
		</div>
	);
}
