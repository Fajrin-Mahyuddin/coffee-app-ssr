import '../styles/index.scss';
import Head from 'next/head';
import App from 'next/app';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppProvider } from 'utils/auth';
import { atom, RecoilRoot } from 'recoil';

const queryClient = new QueryClient();


const MyApp = ({ Component, pageProps }) => {
	const [loading, setLoading] = useState(false)
	const router = useRouter();

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
			<RecoilRoot>
				<ErrorBoundary>

					<AppProvider>
						<QueryClientProvider client={queryClient}>
							<Component {...pageProps} pageLoading={loading} />
						</QueryClientProvider>
					</AppProvider>
				</ErrorBoundary>
			</RecoilRoot>
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


class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}