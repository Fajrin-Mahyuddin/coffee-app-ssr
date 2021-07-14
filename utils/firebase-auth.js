import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import firebaseConfig from 'config/firebaseConfig';
import cookie from "cookie"

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
	// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
} else {
	firebase.app()
}

export const loginPost = async ({ email, password }) => {
	try {
		const req = await firebase.auth().signInWithEmailAndPassword(email, password)
		return { data: req, error: false, };
	} catch (error) {
		throw new Error(error)
	}
}


export async function getUser() {

	return users
}

export const logout = () => {
	return firebase.auth().signOut()
}

// login with gmail
export const googleLogin = async () => {
	let provider = new firebase.auth.GoogleAuthProvider();

	try {
		const req = await firebase.auth().signInWithPopup(provider);
		console.log("google sign", req)
		return { data: req, error: false, };
	} catch (error) {
		console.log("google sign", error)
		throw new Error(error)
	}
}

export const loginWithPersistSession = async () => {
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
		.then(() => {
			let provider = new firebase.auth.GoogleAuthProvider();
			return firebase.auth().signInWithPopup(provider);
		}).catch((error) => {
			console.log("error login with persist session", error)
			return error
		})
	try {

	} catch (error) {

	}
}


export const checkFirebase = firebase;
