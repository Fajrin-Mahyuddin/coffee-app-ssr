import * as admin from 'firebase-admin';
const firebaseAdminConfig = require('../firebase-admin-config.json');

!admin.apps.length ?
	admin.initializeApp({
		credential: admin.credential.cert(firebaseAdminConfig)
	}) : admin.app()

export default admin;