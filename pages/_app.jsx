import '../styles/index.scss';
import Head from 'next/head';
import App from 'next/app';
import { useEffect, useState, createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { checkFirebase } from 'utils/firebase-auth';
import { getFirebaseAuth } from 'utils/auth';

const queryClient = new QueryClient()

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const MyApp = ({ Component, pageProps }) => {
	const [loading, setLoading] = useState(false)
	// const [currentUser, setUser] = useState(null)
	const router = useRouter();

	const authUser = getFirebaseAuth();
	console.log("auth user ", authUser)
	useEffect(() => {
		router.events.on("routeChangeStart", () => setLoading(true))
		router.events.on("routeChangeComplete", () => setLoading(false))
		return () => {
			router.events.off("routeChangeStart", () => setLoading(true))
			router.events.off("routeChangeComplete", () => setLoading(false))
		}
	}, [router.pathname])

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<AppContext.Provider value={{ ...authUser }}>
				<QueryClientProvider client={queryClient}>
					<Component {...pageProps} loading={loading} />
				</QueryClientProvider>
			</AppContext.Provider>
		</>
	)
}



// MyApp.getInitialProps = async (context) => {
// 	const { Component, ctx } = context
// 	let pageProps = {};
// 	let users = {};
// 	const appProps = await App.getInitialProps(context)
// 	if (Component.getInitialProps) {
// 		pageProps = await Component.getInitialProps(appProps.pageProps)
// 	}

// 	const us = checkFirebase.auth().currentUser
// 	console.log("current", us)
// 	checkFirebase.auth().onIdTokenChanged((user) => {
// 		console.log("object", user)
// 		if (user !== null) {
// 			users = user;
// 			if (ctx.pathname === '/login' && ctx.res) {
// 				ctx.res.writeHead(302, { Location: '/' })
// 				ctx.res.end()
// 			}
// 		}
// 	})
// 	console.log("page props", users)
// 	return { users, pageProps }
// }


export default MyApp;