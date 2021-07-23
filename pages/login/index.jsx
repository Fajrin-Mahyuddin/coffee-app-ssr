import nookies from 'nookies';
import Image from 'next/image';
import { motor, windy } from 'images';
import { useRouter } from 'next/router';
import { StandartLayout } from 'layout';
import { redirectTo, useAppContext } from 'utils/auth';
import { useRef, useState, useEffect } from 'react';
import { googleLogin, loginPost } from 'utils/firebase-auth';
import {
	Form,
	InputAlert,
	InputText,
	SubmitBtn
} from 'components';
import {
	GoogleOutlined,
	KeyOutlined,
	LoadingOutlined,
	LoginOutlined,
	UserOutlined
} from '@ant-design/icons';
import admin from 'utils/firebase-admin';

const Login = (props) => {
	const { errorInfo, pageLoading } = props
	const inputRef = useRef();
	const router = useRouter();

	const [redirectStatus, setRedirectStatus] = useState(null);
	const [input, setInput] = useState({});
	const [alert, setAlert] = useState(null)
	const [loading, setLoading] = useState({ type: null, status: false })

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
			setTimeout(() => {
				redirectTo('/', null);
			}, 3000)
		}
		setLoading({ type: null, status: false });
	}

	useEffect(() => {
		if (errorInfo) {
			setAlert({ type: "warning", body: errorInfo.code })
			if (errorInfo.code === 'auth/id-token-expired') {
				nookies.destroy(null, 'token');
			}
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

	if (redirectStatus) return <div>Redirect..</div>
	return (
		<StandartLayout footer={false}>
			<StandartLayout.Content>
				<div className="content-login">
					<div className="text-wrapper">
						<h2>
							Coffee App Login
						</h2>
						<p>Feel bad stay at home ? Don't worry, a cup of coffee can help.</p>
						<Form
							onSubmit={(e) => onSubmit(e, 'submit-email')}
							className="form-vertical mtb-20"
						>
							<Form.Row>
								<Form.Column className="mb-10">
									<InputAlert alert={alert} />
								</Form.Column>
							</Form.Row>
							<Form.Row>
								<Form.Column className="mb-10">
									<InputText
										type="email"
										error={false}
										ref={inputRef}
										name="email"
										label="Email"
										id="email-input"
										icon={UserOutlined}
										placeholder="email"
										onChange={handleChange}
										classWrapper="display-column column-item"
									/>
								</Form.Column>
							</Form.Row>
							<Form.Row>
								<Form.Column className="mb-10">
									<InputText
										type="password"
										error={false}
										ref={inputRef}
										name="password"
										label="Password"
										id="password-input"
										icon={KeyOutlined}
										placeholder="password"
										onChange={handleChange}
										classWrapper="display-column column-item"
									/>
								</Form.Column>
							</Form.Row>
							<div className="display-horizontal">
								<input type="checkbox" className="remember_me" id="remember_me" /><label htmlFor="remember_me">remember me</label>
							</div>
							<div className="display-horizontal mtb-20">
								<SubmitBtn
									type="submit"
									label="Login"
									loading="false"
									disabled={loading.status}
									icon={loading.type === 'submit-email' ? LoadingOutlined : LoginOutlined}
									className="btn info-btn sm-btn mr-5"
								/>

								<SubmitBtn
									type="button"
									label="Login with gmail"
									loading="false"
									disabled={loading.status}
									icon={loading.type === 'submit-gmail' ? LoadingOutlined : GoogleOutlined}
									className="btn primary-btn sm-btn mr-5"
									onClick={(e) => onSubmit(e, 'submit-gmail')}
								/>
							</div>
						</Form>
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
	return {
		props: { ...props }
	}
}


export default Login