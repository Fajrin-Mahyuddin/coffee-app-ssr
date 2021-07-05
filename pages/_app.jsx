import '../styles/index.scss';
import Head from 'next/head'

const App = ({ Component, pageProps }) => {

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="favicon.svg" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default App;