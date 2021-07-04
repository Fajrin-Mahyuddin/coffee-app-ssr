import { forwardRef } from "react";

const SubmitBtn = ({ label, ...props }, ref) => {
	return (
		<button ref={ref} {...props}>{label}</button>
	)
};

export default forwardRef(SubmitBtn);