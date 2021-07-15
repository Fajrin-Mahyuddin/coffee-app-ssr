import '../styles/index.scss';
import Head from 'next/head';
import { useEffect, useState, createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { checkFirebase } from 'utils/firebase-auth';

const queryClient = new QueryClient()

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const MyApp = ({ Component, pageProps }) => {
	const [loading, setLoading] = useState(false)
	const [currentUser, setUser] = useState(null)
	const router = useRouter();

	useEffect(() => {
		checkFirebase.auth().onIdTokenChanged(setUser)
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
			<AppContext.Provider value={{ currentUser }}>
				<QueryClientProvider client={queryClient}>
					<Component {...pageProps} loading={loading} />
				</QueryClientProvider>
			</AppContext.Provider>
		</>
	)
}



// MyApp.getInitialProps = async (context) => {
// 	const { Component, ctx } = context
// 	let pageProps = {}
// 	const appProps = await App.getInitialProps(context)
// 	if (Component.getInitialProps) {
// 		pageProps = await Component.getInitialProps(appProps.pageProps)
// 	}
// let user = checkFirebase.auth().currentUser
// if (user !== null) {
// 	if (ctx.pathname === '/login') {
// 		if (ctx.req) {
// 			ctx.res.writeHead(302, { Location: ctx.pathname })
// 			ctx.res.end()
// 		} else {
// 			Router.push(ctx.pathname)
// 		}
// 	}
// }
// console.log("object", context.Component)
// console.log("page props", pageProps)
// return { pageProps }
// }


export default MyApp;