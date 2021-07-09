import firebase from 'firebase/app';
import 'firebase/analytics';
import moduleName from 'firebase/auth';
import firebaseConfig from 'config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

firebase.auth().signInWithEmailAndPassword(email, password)
	.then((credential) => {
		console.log("login user", credential)
	}).catch(error => {
		console.log("error firebase", error)
	})