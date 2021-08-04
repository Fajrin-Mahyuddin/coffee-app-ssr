import { useRouter } from "next/router";
import { useEffect, useState } from "react"

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