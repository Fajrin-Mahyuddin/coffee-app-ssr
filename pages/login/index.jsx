import { useRef, useState } from 'react';
import Image from 'next/image';
import { motor, windy } from 'images';
import { StandartLayout } from 'layout';
import { Form, InputAlert, InputText, SubmitBtn } from 'components';
import { KeyOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import { loginPost } from 'utils/firebase-auth';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

const Login = () => {
	const router = useRouter()
	const [input, setInput] = useState({});
	const [alert, setAlert] = useState(null)
	const [loading, setLoading] = useState(false)
	const inputRef = useRef();

	const handleChange = (e) => {
		e.preventDefault();
		console.log("object", e)
		setInput({
			...input,
			[e.target.name]: e.target.value.toString()
		})
	}



	const onSubmit = async (e) => {
		e.preventDefault();
		const { data, status, isLoading } = useQuery("getUserLogin", () => loginPost(input))
		console.log("response useQuery", data, status, isLoading);
		!status && setAlert({ type: "danger", body: data?.message })
		setLoading(isLoading);
		data && router.push('/');
	}

	if (loading) return <div>Loading</div>
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
									disabled={false}
									icon={SendOutlined}
									className="btn primary-btn sm-btn mr-5"
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

export default Login