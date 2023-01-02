import { useState } from "react";
import { Menubar, Menuoption, Menuitem } from "./lib/Arbiter/Arbiter";

export default function App() {
	const [file, setFile] = useState();
	const [message, setMessage] = useState("HelloWorld");

	const handleExit = async () => {
		await window.Neutralino.app.killProcess();
	};

	const handleOpenFile = async () => {
		let entries = await window.Neutralino.os.showOpenDialog("Open a file", {
			filters: [
				{ name: "Text Files", extensions: ["txt"] },
				{ name: "All files", extensions: ["*"] },
			],
		});

		setFile(entries);
		setMessage(entries[0]);
	};

	const handleGithub = (async) => {
		Neutralino.os.open("https://neutralino.js.org");
	};

	return (
		<div>
			<Menubar>
				<Menuoption text="File" color="#585858">
					<Menuitem text="New" sidetext="Ctrl + N" />
					<Menuitem text="Open" sidetext="Ctrl + O" onClick={handleOpenFile} />
					<Menuitem text="Save" sidetext="Ctrl + S" />
					<Menuitem text="Save As" sidetext="Ctrl + Shift + S" />
					<Menuitem text="#break" />
					<Menuitem text="Exit" onClick={handleExit} />
				</Menuoption>
				<Menuoption text="Edit" color="#585858">
					<Menuitem text="Copy" sidetext="Ctrl + C" />
					<Menuitem text="Cut" sidetext="Ctrl + X" />
					<Menuitem text="Paste" sidetext="Ctrl + V" />
				</Menuoption>
				<Menuoption text="Help" color="#585858">
					<Menuitem text="Documentation" />
					<Menuitem text="#break" />
					<Menuitem text="Github" />
					<Menuitem text="About" />
				</Menuoption>
			</Menubar>
			<h1>{message}</h1>
		</div>
	);
}
