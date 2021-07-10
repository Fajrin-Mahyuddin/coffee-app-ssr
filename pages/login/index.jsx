import { createRef } from 'react';
import Image from 'next/image';
import { motor, windy } from 'images';
import { StandartLayout } from 'layout';
import { Form, InputAlert, InputText, SubmitBtn } from 'components';
import { KeyOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';

const Login = () => {
	const inputRef = createRef();

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(e)
	}
	return (
		<StandartLayout>
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
									<InputAlert alert={null} />
								</Form.Column>
							</Form.Row>
							<Form.Row>
								<Form.Column className="mb-10">
									<InputText
										error={false}
										ref={inputRef}
										name="username"
										label="Username"
										id="username-input"
										icon={UserOutlined}
										placeholder="username"
										classWrapper="display-column column-item"
										onChange={(e) => console.log(e)}
									/>
								</Form.Column>
							</Form.Row>
							<Form.Row>
								<Form.Column className="mb-10">
									<InputText
										error={false}
										ref={inputRef}
										name="password"
										label="Password"
										id="password-input"
										icon={KeyOutlined}
										placeholder="password"
										classWrapper="display-column column-item"
										onChange={(e) => console.log(e)}
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