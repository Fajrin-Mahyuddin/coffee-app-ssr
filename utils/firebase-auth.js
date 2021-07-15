import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import firebaseConfig from 'config/firebaseConfig';

!firebase.apps.length ?
	firebase.initializeApp(firebaseConfig) : firebase.app()

export const checkFirebase = firebase;

export const loginPost = async ({ email, password }) => {
	try {
		const req = await firebase.auth().signInWithEmailAndPassword(email, password)
		return { data: req, error: false, };
	} catch (error) {
		throw new Error(error)
	}
}

export async function getUser() {
	let users = []
	firebase.auth().onIdTokenChanged((param) => users.push(param));
	return { users }
}

export const logout = () => {
	return firebase.auth().signOut()
}

// login with gmail
export const googleLogin = async () => {
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
		.then(() => {
			let provider = new firebase.auth.GoogleAuthProvider();

			const req = firebase.auth().signInWithPopup(provider);
			console.log("google sign", req)
			return Promise.resolve(req)
		}).catch(error => {
			return Promise.reject(error)
		})
}

