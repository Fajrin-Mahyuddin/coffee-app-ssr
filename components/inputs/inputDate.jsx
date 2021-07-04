import React, { forwardRef } from 'react';

const InputDate = ({ id, label, icon: Icon, error, classWrapper, ...props }, ref) => {
	return (
		<div className={`input-wrapper ${classWrapper}`}>
			<label className="mb-5" htmlFor={id}>
				{label}
			</label>
			{Icon && <Icon className="form-icon" />}
			<input
				id={id}
				type="date"
				autoComplete="off"
				ref={ref}
				className={`input ${error && 'error'}`}
				{...props}
			/>
		</div>
	)
}

export default forwardRef(InputDate)
