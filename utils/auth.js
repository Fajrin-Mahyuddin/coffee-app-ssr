import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react"
import { checkFirebase } from "./firebase-auth"

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const isOnBrowser = () => typeof window !== "undefined";

export const AppProvider = ({ children }) => {
	const { authUser, loading } = getFirebaseAuth();
	const router = useRouter()
	useEffect(() => {
		if (isOnBrowser() && window.location.pathname === '/login') {
			if (!authUser && !loading) {
				router.push('/')
			}
		}
	}, [authUser, loading])
	return (
		<AppContext.Provider value={{ ...authUser }}>
			{children}
		</AppContext.Provider>
	)
}

// export const ProtectedRoute = ({ children }) => {
// 	const authUser = getFirebaseAuth();
// 	if (window.location.pathname === '/login' && !authUser) {
// 		Router
// 	}
// 	return (

// 	)
// }

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