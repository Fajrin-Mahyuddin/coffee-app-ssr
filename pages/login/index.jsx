import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motor, windy } from 'images';
import { StandartLayout } from 'layout';
import { Form, InputAlert, InputText, SubmitBtn } from 'components';
import { KeyOutlined, LoadingOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import { checkFirebase, googleLogin, loginPost } from 'utils/firebase-auth';
import { useRouter } from 'next/router';
import { useAppContext } from 'utils/auth';

const Login = (props) => {
	const router = useRouter()
	const inputRef = useRef();

	const { authUser, loading } = useAppContext()

	const [input, setInput] = useState({});
	const [alert, setAlert] = useState(null)
	const [loginLoading, setLoginLoading] = useState(false)


	const handleChange = (e) => {
		e.preventDefault();
		setInput({
			...input,
			[e.target.name]: e.target.value.toString()
		})
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		setLoginLoading(true);
		try {
			await loginPost(input)
			router.push("/")
		} catch (error) {
			setAlert({ type: "danger", body: error?.message })
		} finally {
			setLoginLoading(false)
		}
	}

	const handleGoogleSign = async () => {
		try {
			const res = await googleLogin();
			console.log("data google set cookie", res)
			if (res) {
				router.push("/")
			}
		} catch (error) {
			setAlert({ type: "danger", body: error?.message })
		}
	}

	useEffect(() => {
		if (!authUser && !loading) {
			router.push('/')
		}
		router.prefetch("/")
	}, [authUser, loading])

	console.log("currentUser", authUser)
	if (loading || !authUser) return <div>loading...</div>

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
									icon={loginLoading ? LoadingOutlined : SendOutlined}
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

// export async function getServerSideProps() {
// 	const user = checkFirebase.auth().currentUser
// 	return {
// 		props: {}
// 	}
// }


export default Login