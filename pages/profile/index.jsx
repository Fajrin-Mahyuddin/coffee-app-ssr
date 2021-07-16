import { StandartLayout } from "layout";
import { useRouter } from "next/router";
import { useAppContext } from "pages/_app";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { logout } from "utils/firebase-auth";

const ProfilePage = () => {
	const router = useRouter()
	const { authUser, loading } = useAppContext()
	// const [cookie, undefined, removeCookie] = useCookies(["user"])
	const handleLogout = async () => {
		try {
			const req = await logout();
			req && router.push('/')
		} catch (error) {
			throw new Error("error logout")
		}
	}
	useEffect(() => {
		if (!authUser && !loading) {
			router.push("/login")
		}
		router.prefetch("/")
	}, [authUser, loading])

	return (
		<StandartLayout>
			<StandartLayout.Content>
				<button onClick={handleLogout}>
					logout
				</button>
			</StandartLayout.Content>
		</StandartLayout>
	)
}


export default ProfilePage;