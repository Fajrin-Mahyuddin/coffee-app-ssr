import { forwardRef } from "react";

const SubmitBtn = ({ label, icon: Icon = null, ...props }, ref) => {
	return (
		<button ref={ref} {...props}>{Icon && <Icon />} {label}</button>
	)
};

export default forwardRef(SubmitBtn);