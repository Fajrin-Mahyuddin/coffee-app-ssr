import router, { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react"
import { checkFirebase } from "./firebase-auth"

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const isOnBrowser = () => typeof window !== "undefined";

export const AppProvider = ({ children }) => {
	const { authUser, loading } = getFirebaseAuth();
	const valueContext = { authUser, loading, foo: "bar" }
	const router = useRouter()
	useEffect(() => {
		if (isOnBrowser() && window.location.pathname === '/login') {
			if (authUser) {
				router.push('/')
			}
		}
	}, [authUser, loading])
	return (
		<AppContext.Provider value={valueContext}>
			{children}
		</AppContext.Provider>
	)
}

export const AuthenticatedRoute = (Component) =>
	() => {
		const { authUser, loading } = getFirebaseAuth();
		console.log("authenticated route", authUser)
		useEffect(() => {
			if (isOnBrowser() && window.location.pathname === '/login') {
				if (!authUser) {
					router.push('/login')
				}
			}
		}, [authUser, loading])
		if (loading) return <div>loading...</div>
		return (
			<Component />
		)
	}
export const UnauthenticatedRoute = (Component) =>
	() => {
		const { authUser, loading } = getFirebaseAuth();
		useEffect(() => {
			// if (isOnBrowser()) {
			if (authUser && !loading) {
				router.push('/')
			}
			// }
		}, [authUser, loading])
		if (loading || !authUser) return <div>loading...</div>
		return (
			<Component />
		)
	}


export const getFirebaseAuth = () => {
	const [authUser, setAuthUser] = useState(null)
	const [loading, setLoading] = useState(false)

	const setUser = async (user) => {
		setLoading(true)
		if (!user) {
			setAuthUser(null)
			setLoading(false)
			return;
		}
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