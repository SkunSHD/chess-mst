import { types } from "mobx-state-tree";
// Firebase
import FBS from "firebase/API.firebase";

const Auth = {
};


const actions = (self)=> {
	return {
		setUser: (store, user)=> store.user = user,
		getVisitors: (store)=> FBS.getVisitors(),

		login: (store, { login, password })=> FBS.login(login, password),
		logout: (store)=> FBS.logout(),
		registration: (store)=> console.log(`%c registration`, 'background: pink', store),

		setOnAuthStateChangedListener: (store)=> {
			FBS.auth.onAuthStateChanged((user)=> {
				console.log(`%c onAuthStateChanged [${ user ? 'user' : ''}]`, 'background: orange')
				store.setUser(user ? Object.assign({}, user.providerData[0]) : null);
				if(!store.isProjectReady) store.setProjectReady(true);
			});
		}

	};
};


export default types.model('Auth', Auth).actions(actions);