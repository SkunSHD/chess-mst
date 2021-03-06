import { onPatch } from "mobx-state-tree";
// Models
import RootModel from "models/Root.model";


const RootModelDefault = {
	visitors: [
		{name: 'Blatnoi', timestamp: Date.now()},
		{name: 'Plechevaya', timestamp: Date.now() - 86400000}
	]
}


const store = RootModel.create(RootModelDefault);


// @SOURCE: https://github.com/mobxjs/mobx-state-tree/blob/master/API.md#onpatch
onPatch(store, (patch)=> {
	let color = 'color: gray;';
	switch(patch.op) {
		case "add":
			color = 'color: green;';
			break;
		case "replace":
			color = 'color: darkorange;';
			break;
		case "remove":
			color = 'color: darkred;';
			break;
		default:
			color = 'color: black';
			break;
	}
	console.groupCollapsed(`%c🦄🌈 [@action: ${patch.op} ${patch.path}]`, color);
	console.log(patch);
	console.groupEnd(`%c🦄🌈 [@action: ${patch.op} ${patch.path}]`, color);
});

export default store;