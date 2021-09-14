import * as adminFirebase from 'firebase-admin';
const firebaseAdminConfig = require('../firebase-admin-config.json');
// import firebaseAdminConfig from '../firebase-admin-config.json';

!adminFirebase.apps.length ?
	adminFirebase.initializeApp({
		credential: adminFirebase.credential.cert(firebaseAdminConfig)
	}) : adminFirebase.app()

export default adminFirebase;