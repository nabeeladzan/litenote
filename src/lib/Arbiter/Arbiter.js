import ARBmenubar from "./Menubar/arb_menubar";
import ARBmenuoption from "./Menubar/arb_menuoption";
import ARBmenuitem from "./Menubar/arb_menuitem";

export function Menubar(props) {
	return <ARBmenubar {...props} />;
}

export function Menuoption(props) {
	return <ARBmenuoption {...props} />;
}

export function Menuitem(props) {
	return <ARBmenuitem {...props} />;
}
