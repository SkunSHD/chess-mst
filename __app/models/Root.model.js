import { types } from "mobx-state-tree";
import User from 'models/User.model';
import Auth from 'models/Auth.model';


const RootModel = {
	user: types.maybe(User)
};

const auth = Auth.create();


const actions = (store)=> {
	return {

		// Auth
		isExist: ()=> auth.isExist(store),
		login: ()=> auth.login(store),
		registration: ()=> auth.registration(store),
		logout: ()=> auth.logout(store)
	};
};


export default types.model(RootModel).actions(actions);