import { types } from "mobx-state-tree";
import User from 'models/User.model';
import Auth from 'models/Auth.model';


const RootModel = {
	user: types.maybe(User),
	isProjectReady: false
};

const auth = Auth.create();


const actions = (store)=> {
	return {

		setProjectReady: (isProjectReady = true)=> store.isProjectReady = isProjectReady,

		// Auth
		setUser: (user)=> auth.setUser(store, user),
		setOnAuthStateChangedListener: () => auth.setOnAuthStateChangedListener(store),
		removeOnAuthStateChangeListener: () => auth.removeOnAuthStateChangeListener(store),
		isExist: ()=> auth.isExist(store),

		login: ({ login, password })=> auth.login(store, { login, password }),

		registration: ()=> auth.registration(store),
		logout: ()=> auth.logout()
	};
};


export default types.model(RootModel).actions(actions);