import { useRouter } from 'next/router'

const ActiveList = ({ href, className, children, nestedNumber = 1 }) => {
	const router = useRouter();
	console.log("router", router);
	// nested number untuk mengaktifkan child link
	const separateLink = (url) => url.split("/")[nestedNumber];
	const splitHref = separateLink(href)

	const classActive = () =>
		separateLink(router.pathname) === splitHref ?
			"active"
			: "";

	const handleClick = (e) => {
		e.preventDefault();
		router.push(href)
	}

	return <a href={href} onClick={handleClick} className={`${className} ${classActive()}`}>{children}</a>
}

export default ActiveList;