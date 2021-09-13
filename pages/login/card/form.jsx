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
import { useRef } from 'react';

const FormLogin = ({
	alert,
	setAlert,
	loading,
	handleChange,
	onSubmit
}) => {

	const inputRef = useRef();
	return (
		<Form
			onSubmit={(e) => onSubmit(e, 'submit-email')}
			className="form-vertical mtb-20"
		>
			<Form.Row>
				<Form.Column className="mb-10">
					<InputAlert alert={alert} onClick={() => setAlert(null)} />
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
	)
}

export default FormLogin;