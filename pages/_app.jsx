import '../styles/index.scss';
import Head from 'next/head';
import App from 'next/app';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AppProvider } from 'utils/auth';
import { atom, RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }) => {
	const [loading, setLoading] = useState(false);
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
						<Component {...pageProps} pageLoading={loading} />
					</AppProvider>
				</ErrorBoundary>
			</RecoilRoot>
		</>
	)
}


export default MyApp;


class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h3>Something went wrong.</h3>;
		}

		return this.props.children;
	}
}