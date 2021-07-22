import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import firebaseConfig from 'config/firebaseConfig';
import nookies from 'nookies';

!firebase.apps.length ?
	firebase.initializeApp(firebaseConfig) : firebase.app()

export const checkFirebase = firebase;

export const loginPost = async ({ email, password }) => {
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
		.then(async () => {
			try {
				const req = await firebase.auth().signInWithEmailAndPassword(email, password)
				const token = await req.user.getIdToken()
				nookies.set(null, 'token', token, { path: '/' })
				return { data: req, error: false, };
			} catch (error) {
				throw Error(error)
			}
		}).catch(error => {
			return Promise.reject(error)
		})
}

export const logout = () => {
	nookies.destroy(null, 'token');
	return firebase.auth().signOut()
}

// login with gmail
export const googleLogin = async () => {
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
		.then(() => {
			let provider = new firebase.auth.GoogleAuthProvider();
			return firebase.auth().signInWithPopup(provider);
		}).catch(error => {
			return Promise.reject(error)
		})
}

