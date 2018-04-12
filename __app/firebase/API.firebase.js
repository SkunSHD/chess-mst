
//
// (def collections {
// :visitors (.collection firestore "visitors")
// :anonymous_visitors (.collection firestore "anonymous_visitors")
// :deleted_visitors (.collection firestore "deleted_visitors")
// })

const firebase = window.firebase;
const firestore = window.firebase.firestore();

const FBS = {
	firebase,
	firestore,

	collections: {
		visitors: firestore.collection("visitors")
	},

	auth: firebase.auth(),
	login: firebase.auth().signInWithEmailAndPassword,
	signOut: firebase.auth().signOut
};


export default FBS;