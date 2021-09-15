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

export const redirectTo = (dest, ctx) => {
	if (ctx) {
		if (ctx.req) {
			ctx.res.setHeader('Location', dest);
			ctx.res.statusCode = 302;
			ctx.res.finish = true;
			return { props: {} };
		}
	} else {
		Router.push(dest)
	}
}


export const getFirebaseAuth = () => {
	const [authUser, setAuthUser] = useState(null)
	const [loading, setLoading] = useState(true)
	// const [pending, isPending] = useState('pending')

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
		// setLoading(true)
		return () => sub()
	}, []);

	return {
		authUser, loading
	}
}