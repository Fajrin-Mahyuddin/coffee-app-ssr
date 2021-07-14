import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motor, windy } from 'images';
import { StandartLayout } from 'layout';
import { Form, InputAlert, InputText, SubmitBtn } from 'components';
import firebase from 'firebase/app';
import { KeyOutlined, LoadingOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import { checkFirebase, getUser, googleLogin, loginPost, loginWithPersistSession } from 'utils/firebase-auth';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { getCookieDes } from 'utils/cookie-helper';

const Login = (props) => {
	const router = useRouter()
	const inputRef = useRef();

	const [cookie, setCookie] = useCookies(['user'])

	const [currentUser, setCurrentUser] = useState(null);
	const [input, setInput] = useState({});
	const [alert, setAlert] = useState(null)
	const [loading, setLoading] = useState(false)

	// const { user } = getCookieDes("user")

	const handleChange = (e) => {
		e.preventDefault();
		setInput({
			...input,
			[e.target.name]: e.target.value.toString()
		})
	}

	const handleCookie = (param) => {
		setCookie("user", JSON.stringify({ param }), {
			path: "/",
			maxAge: 4200,
			// sameSite: true
		})
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true)
		try {
			const { data } = await loginPost(input)
			console.log("sign in wiht email register", data)
			// handleCookie(data)
			router.push("/")
		} catch (error) {
			setAlert({ type: "danger", body: error?.message })
		} finally {
			setLoading(false)
		}
	}

	const handleGoogleSign = async () => {

		const res = await loginWithPersistSession();
		console.log("data google set cookie", res)
		// handleCookie(data)
		router.push("/")

	}

	// useEffect(() => {
	// 	checkFirebase.auth().onAuthStateChanged(setCurrentUser)
	// 	currentUser && router.back()
	// }, [currentUser])

	console.log("currentUser", props)
	// useEffect( () => {
	// router.prefetch("/")
	// if (user) {
	// 	router.back()
	// }
	// }, [user, cookie])
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
							onSubmit={onSubmit}
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
									disabled={loading}
									icon={loading ? LoadingOutlined : SendOutlined}
									className="btn primary-btn sm-btn mr-5"
								/>
								<SubmitBtn
									type="button"
									label="Login with gmail"
									loading="false"
									// disabled={loading}
									// icon={loading ? LoadingOutlined : SendOutlined}
									className="btn primary-btn sm-btn mr-5"
									onClick={handleGoogleSign}
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

// export async function getStaticProps(ctx) {
// 	console.log("ctx on getStaticProps", ctx)
// 	return {
// 		props: { name: "fajrin" }
// 	}
// }

export async function getServerSideProps(ctx) {
	let users = null
	firebase.auth().onIdTokenChanged((param) => {
		users = param
	});
	console.log("user on firebase auth", users)
	// ctx.res.writeHead(302, { Location: '/' });
	// ctx.res.end();
	return {
		props: {
			...users
		}
	}
}

export default Login