import { types } from "mobx-state-tree";

const User = {
	isAdmin: false,
	isAnonymous: false,
	isSocNet: false,
};


const actions = (store)=> {
	return {
		isExist: ()=> console.log('%%---> Auth.authorized', store.isAdmin)
	}
};


export default types.model('User', User).actions(actions);