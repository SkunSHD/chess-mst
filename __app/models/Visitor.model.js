import { types } from "mobx-state-tree";

const Visitor = {
	name: types.string,
	timestamp: types.number
};


const views = (visitor)=> {
	return {
		get date() {
			return new Date(visitor).toLocaleDateString();
		}
	};
};


const actions = (self)=> {
	return {

	};
};


export default types.model('Visitor', Visitor).views(views).actions(actions);