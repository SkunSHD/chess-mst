import { types, getParent } from "mobx-state-tree";

const User = {
	authorized: false
};


const actions = (self)=> {
	return {
	};
};


export default types.model('User', User).actions(actions);