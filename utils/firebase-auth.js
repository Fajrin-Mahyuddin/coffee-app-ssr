import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import firebaseConfig from 'config/firebaseConfig';
import cookie from "cookie"

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export const loginPost = async ({ email, password }) => {
	try {
		const req = await firebase.auth().signInWithEmailAndPassword(email, password)
		return { data: req, error: false, };
	} catch (error) {
		throw new Error(error)
	}
}

export async function getUser() {
	const user = firebase.auth().currentUser;
	if (user) {
		return {
			user,
			error: false
		};
	} else {
		return {
			user,
			error: true
		};
	}
}

export const logout = () => {
	firebase.auth().signOut()
}

export function parseCookies(req) {
	return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}

export const checkFirebase = firebase;
