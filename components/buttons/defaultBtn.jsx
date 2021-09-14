import { forwardRef } from "react";

const DefaultBtn = ({ label, btn, size, className, icon: Icon = null, ...props }, ref) => {
	return (
		<button ref={ref} className={`btn ${btn}-btn ${size}-btn ${className}`} {...props} >{Icon && <Icon />} {label}</button>
	)
};

export default forwardRef(DefaultBtn);