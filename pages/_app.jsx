import '../styles/index.scss';
import Head from 'next/head';
import App from 'next/app';
import { checkFirebase } from 'utils/firebase-auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

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
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} loading={loading} />
			</QueryClientProvider>
		</>
	)
}


export default MyApp;