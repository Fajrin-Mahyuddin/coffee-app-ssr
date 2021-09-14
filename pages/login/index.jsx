import nookies from 'nookies';
import Image from 'next/image';
import { motor, windy } from 'images';
import { useRouter } from 'next/router';
import { StandartLayout } from 'layout';
import adminFirebase from 'utils/firebase-admin-helper';
import { useState, useEffect } from 'react';
import {
	LoadingOutlined,
	LogoutOutlined,
	UserOutlined
} from '@ant-design/icons';
import { getFirebaseAuth, redirectTo } from 'utils/auth';
import {
	Form,
	InputText,
	DefaultBtn,
	FormLogin
} from 'components';
import {
	checkFirebase,
	googleLogin,
	loginPost,
	logout
} from 'utils/firebase-auth';

const Login = (props) => {
	const router = useRouter();
	const [input, setInput] = useState({});
	const { authUser } = getFirebaseAuth();
	const { errorInfo, pageLoading } = props;
	const { query: { next = '/' } } = router;
	const [alert, setAlert] = useState(null);
	const [redirectStatus, setRedirectStatus] = useState(null);
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
			redirectTo(next, null);
		}

		setLoading({ type: null, status: false });
	}

	const onLogout = () => {
		setLoading({ type: 'logout', status: true })
		logout();
		redirectTo('/login', null);
		setLoading({ type: null, status: false });
	}

	const reAuthenticate = () => {
		setLoading({ type: 're-auth', status: true });
		checkFirebase.auth().currentUser.getIdToken(true)
			.then((token) => {
				nookies.set(null, 'token', token, { path: '/' });
				redirectTo(next, null);
				setLoading({ type: null, status: false });
			}).catch(err => {
				setLoading({ type: null, status: false });
				setAlert({ type: "danger", body: err.message })
			})
	}

	useEffect(() => {
		if (errorInfo) {
			setAlert({ type: "warning", body: errorInfo.code })
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
	console.log("auth user", router.query)

	if (redirectStatus) return <div>Redirect..</div>
	if (pageLoading) return <div>Loading..</div>
	return (
		<StandartLayout footer={false}>
			<StandartLayout.Content>
				<div className="content-login">
					<div className="text-wrapper">
						<h2>
							{errorInfo?.code === 'auth/id-token-expired' ? "Your Session Login Expired" : "Coffee App Login"}
						</h2>
						<p>Feel bad stay at home ? Don't worry, a cup of coffee can help.</p>
						{errorInfo?.code === 'auth/id-token-expired' ?
							<Form className="form-vertical mtb-20">
								<Form.Row>
									<Form.Column className="mb-10">
										<InputText
											type="email"
											error={false}
											disabled={true}
											value={authUser?.email}
											id="email-input"
											icon={UserOutlined}
											classWrapper="display-column column-item"
										/>
									</Form.Column>
								</Form.Row>
								<div className="display-horizontal mtb-20">
									<DefaultBtn
										size="md"
										btn="primary"
										type="button"
										className="mr-5"
										icon={loading.type === 're-auth' ? LoadingOutlined : UserOutlined}
										label="Re-Authentication"
										onClick={reAuthenticate}
									/>
									<DefaultBtn
										size="md"
										btn="danger"
										type="button"
										label="Logout"
										onClick={onLogout}
										icon={loading.type === 'logout' ? LoadingOutlined : LogoutOutlined}
									/>
								</div>
							</Form>
							:
							<FormLogin
								alert={alert}
								value={input}
								setAlert={setAlert}
								loading={loading}
								onSubmit={onSubmit}
								handleChange={handleChange} />
						}
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
	let props = {};
	// const { query: { next } } = ctx;
	// let nextUrlDecode;

	// if (next) {
	// 	nextUrlDecode = decodeURIComponent(next);
	// } else {
	// 	nextUrlDecode = '/'
	// }

	const token = nookies.get(ctx);

	if (token.token) {
		await adminFirebase.auth().verifyIdToken(token.token)
			.then(response => {
				if (response) {
					redirectTo('/', ctx);
				}
			}).catch(error => {
				props = { ...error }
			})
	}

	return {
		props: { ...props }
	}
}


export default Login