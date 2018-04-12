// Firebase
import firebase from 'firebase';
require('firebase/firestore');

//
// (def collections {
// :visitors (.collection firestore "visitors")
// :anonymous_visitors (.collection firestore "anonymous_visitors")
// :deleted_visitors (.collection firestore "deleted_visitors")
// })

const config = {
	apiKey: "AIzaSyCsaEXo297Mo1Js08CUQ9DzWSYqJDQBdRo",
	authDomain: "cheessons.firebaseapp.com",
	databaseURL: "https://cheessons.firebaseio.com",
	projectId: "cheessons",
	storageBucket: "cheessons.appspot.com",
	messagingSenderId: "105788159539"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
window.firebase = firebase
const FBS = {
	firebase,
	firestore,

	collections: {
		visitors: firestore.collection("visitors")
	},

	auth: firebase.auth(),
	login: (login, password)=> firebase.auth().signInWithEmailAndPassword(login, password),
	logout: ()=> firebase.auth().signOut()
};


export default FBS;