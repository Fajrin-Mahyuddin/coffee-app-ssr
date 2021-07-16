import { useEffect, useState } from "react"
import { checkFirebase } from "./firebase-auth"

export const getFirebaseAuth = () => {
	const [authUser, setAuthUser] = useState(null)
	const [loading, setLoading] = useState(false)

	const setUser = (user) => {
		if (!user) {
			setAuthUser(null)
			setLoading(false)
			return;
		}
		setLoading(true)
		setAuthUser(user)
		setLoading(false)
	}
	useEffect(() => {
		const sub = checkFirebase.auth().onIdTokenChanged(setUser);
		return () => sub()
	}, []);

	return {
		authUser, loading
	}
}