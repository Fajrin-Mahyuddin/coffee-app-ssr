import { StarFilled } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { logout } from "./firebase-auth";

export const useLoading = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		router.events.on("routeChangeStart", () => setLoading(true))
		router.events.on("routeChangeComplete", () => setLoading(false))
		return () => {
			router.events.off("routeChangeStart", () => setLoading(true))
			router.events.off("routeChangeComplete", () => setLoading(false))
		}
	}, [])

	return {
		loading
	}

}

export const useRateView = (value) => {
	const star = []
	for (let i = 0; i < value; i++) {
		star.push(<StarFilled key={`orange-${i}`} style={{ color: 'orange' }} />)
	}
	for (let i = 0; i < (5 - value); i++) {
		star.push(<StarFilled key={`grey-${i}`} style={{ color: 'grey' }} />)
	}
	return star.map((item) => item)
}

export const useCheckToken = (errorInfo) => {
	const [alertToken, setAlert] = useState(null);
	const [redirect, setRedirect] = useState(null);
	useEffect(() => {
		if (errorInfo) {
			setAlert({ type: "warning", body: errorInfo.code })
			// if (errorInfo.code === 'auth/id-token-expired') {
			logout();
			// }
		}
		return () => {
			setAlert(null)
			setRedirect(null)
		}
	}, [errorInfo])

	return { alertToken, redirect }
}