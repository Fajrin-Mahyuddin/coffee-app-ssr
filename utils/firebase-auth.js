import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import firebaseConfig from 'config/firebaseConfig';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export const loginPost = async ({ email, password }) => {
	try {
		const req = await firebase.auth().signInWithEmailAndPassword(email, password)
		return { data: req, error: false };
	} catch (error) {
		return { data: error, error: true }
	}
}
