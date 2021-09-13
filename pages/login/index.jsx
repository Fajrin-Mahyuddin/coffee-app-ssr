import nookies from 'nookies';
import Image from 'next/image';
import { motor, windy } from 'images';
import { useRouter } from 'next/router';
import { StandartLayout } from 'layout';
import { redirectTo, useAppContext } from 'utils/auth';
import { useRef, useState, useEffect } from 'react';
import { checkFirebase, googleLogin, loginPost, logout } from 'utils/firebase-auth';

import admin from 'utils/firebase-admin';
import FormLogin from './card/form';

const Login = (props) => {
	const { errorInfo, pageLoading } = props
	const router = useRouter();

	const [redirectStatus, setRedirectStatus] = useState(null);
	const [input, setInput] = useState({});
	const [alert, setAlert] = useState(null)
	const [loading, setLoading] = useState({ type: null, status: false });

	const handleChange = (e) => {
		e.preventDefault();
		setInput({
			...input,
			[e.target.name]: e.target.value.toString()
		})
	}

	const submitType = async (type) => {
		switch (type) {
			case 'submit-email':
				return await loginPost(input);
			case 'submit-gmail':
				return await googleLogin();
			default:
				return await loginPost();
		}
	}

	const onSubmit = async (e, type) => {
		e.preventDefault();
		setLoading({ type, status: true });
		const respon = await submitType(type)
		setRedirectStatus("Redirect...")
		if (respon.message) {
			setAlert({ type: "danger", body: respon?.message })
			setRedirectStatus(null)
		} else {
			const token = await respon.user.getIdToken();
			nookies.set(null, 'token', token, { path: '/' });
			redirectTo('/', null);
			// setTimeout(() => {
			// }, 3000)
		}
		setLoading({ type: null, status: false });
	}

	useEffect(() => {
		if (errorInfo) {
			setAlert({ type: "warning", body: errorInfo.code })
			// if (errorInfo.code === 'auth/id-token-expired') {
			// 	nookies.destroy(null, 'token');
			// checkFirebase.auth().currentUser.getIdToken(true).then(token => {
			// 	console.log("new token are", token);
			// 	nookies.set(null, 'token', token, { path: '/' });
			// 	redirectTo('/', null);	
			// })
			// logout()
			// }
		}
		return () => {
			setAlert(null)
			setRedirectStatus(null)
		}
	}, [props])

	useEffect(() => {
		return () => {
			setRedirectStatus(null);
		}
	}, [router])

	console.log("input value of form", input)
	if (redirectStatus) return <div>Redirect..</div>
	if (pageLoading) return <div>Loading..</div>
	return (
		<StandartLayout footer={false}>
			<StandartLayout.Content>
				<div className="content-login">
					<div className="text-wrapper">
						<h2>
							Coffee App Login
						</h2>
						<p>Feel bad stay at home ? Don't worry, a cup of coffee can help.</p>
						<FormLogin
							alert={alert}
							setAlert={setAlert}
							loading={loading}
							onSubmit={onSubmit}
							handleChange={handleChange} />
					</div>
					<div className="login-image">
						<Image src={windy} alt="windy" />
						<Image src={motor} alt="motor" />
					</div>
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export const getServerSideProps = async (ctx) => {
	const { res } = ctx
	let props = {};
	const token = nookies.get(ctx);

	if (token.token) {
		await admin.auth().verifyIdToken(token.token)
			.then(response => {
				if (response) {
					redirectTo('/', res);
				}
			}).catch(error => {
				props = { ...error }
			})
	}

	console.log("error inffffo____", token)

	return {
		props: { ...props }
	}
}


export default Login