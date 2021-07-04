import React from 'react';
import InputText from './InputText';


const Form = ({ onSubmit, className, children }) => {
	return (
		<form onSubmit={onSubmit} className={`form-wrapper ${className}`}>
			{/* { alert?.type && <InputAlert alert={{ ...alert }} onClick={closeAlert} />} */}
			{children}
		</form>
	)
}

Form.Row = ({ children }) => <div className="row">{children}</div>
Form.Column = ({ className, children }) => <div className={`column ${className}`}>{children}</div>
Form.Input = InputText;

export default Form;
