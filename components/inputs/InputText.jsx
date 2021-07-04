import React, { forwardRef } from 'react';

const InputText = ({
  id,
  label,
  icon: Icon,
  classWrapper,
  error,
  ...props
}, ref) => {
  return (
    <div className={`input-wrapper ${classWrapper}`}>
      <label className="mb-5" htmlFor={id}>
        {label}
      </label>
      {Icon && <Icon className="form-icon" />}
      <input
        id={id}
        type="text"
        autoComplete="off"
        ref={ref}
        className={`input ${error && 'error'}`}
        {...props}
      />
    </div>
  );
};

export default forwardRef(InputText);
