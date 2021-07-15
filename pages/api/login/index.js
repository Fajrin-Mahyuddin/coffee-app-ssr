import firebase from 'firebase/app';

export default function handler(req, res) {
	let user = firebase.auth().currentUser;
	if (user) {
		res.status(200).json({ user })
	}
	res.status(200).json({ user })
}