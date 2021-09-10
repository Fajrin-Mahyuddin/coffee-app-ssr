import Router, { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react"
import { checkFirebase } from "./firebase-auth"

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const isOnBrowser = () => typeof window !== "undefined";

export const AppProvider = ({ children }) => {
	const { authUser, loading } = getFirebaseAuth();
	const valueContext = { authUser, loading, foo: "bar" }

	return (
		<AppContext.Provider value={valueContext}>
			{children}
		</AppContext.Provider>
	)
}

export const redirectTo = (dest, res) => {
	if (res) {
		res.writeHead(302, { Location: dest });
		res.end()
	} else {
		Router.push(dest)
	}
}


export const getFirebaseAuth = () => {
	const [authUser, setAuthUser] = useState(null)
	const [loading, setLoading] = useState(true)
	// const [pending, isPending] = useState('pending')

	const setUser = async (user) => {
		// setLoading(true)
		if (!user) {
			setAuthUser(null)
			setLoading(false)
			return;
		}
		setAuthUser(user)
		setLoading(false)
	}
	useEffect(() => {
		// setLoading(true)
		const sub = checkFirebase.auth().onIdTokenChanged(setUser);
		return () => sub()
	}, []);

	return {
		authUser, loading
	}
}