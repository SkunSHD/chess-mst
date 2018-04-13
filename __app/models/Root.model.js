import { types } from "mobx-state-tree";
import User from 'models/User.model';
import Auth from 'models/Auth.model';
import Visitor from 'models/Visitor.model';


const RootModel = {
	isProjectReady: false,
	user: types.maybe(User),
	visitors: types.optional(types.array(Visitor), [])
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


const views = (store)=> ({

})


export default types.model(RootModel).views(views).actions(actions);