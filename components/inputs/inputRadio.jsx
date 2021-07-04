import React, { forwardRef } from 'react';

const InputRadio = ({ id, label, error, classWrapper, ...props }, ref) => {
	return (
		<div className={`input-wrapper ${classWrapper}`}>
			<input
				id={id}
				type="radio"
				ref={ref}
				className={`input ${error && 'error'}`}
				{...props}
			/>
			<label className="radio-label" htmlFor={id}>
				<span className="checkmark"></span>
				{label}
			</label>
		</div>
	)
}

export default forwardRef(InputRadio)
