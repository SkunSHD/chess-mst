import { types, getParent } from "mobx-state-tree";

const Auth = {
};


const actions = (self)=> {
	return {
		login: (store)=> console.log(`%c login`, 'background: green', store),
		logout: (store)=> console.log(`%c logout`, 'background: orange', store),
		registration: (store)=> console.log(`%c registration`, 'background: pink', store)
	};
};


export default types.model('Auth', Auth).actions(actions);