import React from 'react'

const LinkBorderLess = ({ type, label, href }) => {
	return (
		<a href={href} className={`${type}-link__less-border`}>{label}</a>
	)
}

export default LinkBorderLess;
