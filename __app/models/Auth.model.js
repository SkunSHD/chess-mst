import { types } from "mobx-state-tree";
// Firebase
import FBS from "firebase/API.firebase";


const Auth = {
};


const actions = (self)=> {
	return {
		login: (store)=> console.log(`%c login`, 'background: green', store),
		logout: (store)=> console.log(`%c logout`, 'background: orange', store),
		registration: (store)=> console.log(`%c registration`, 'background: pink', store),

		setOnAuthStateChangedListener: (store)=> {
			FBS.authStateChangedDisposer = FBS.auth.onAuthStateChanged((user)=> {
				console.log('onAuthStateChanged', user);
				!!user ?
					store.user = null
					:
					store.user = user;
			});
		},

		removeOnAuthStateChangeListener: ()=> {
			FBS.authStateChangedDisposer();
		}
	};
};


export default types.model('Auth', Auth).actions(actions);