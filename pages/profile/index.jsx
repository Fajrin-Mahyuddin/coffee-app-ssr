import { StandartLayout } from "layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { logout } from "utils/firebase-auth";

const ProfilePage = () => {
	const router = useRouter()
	const [cookie, undefined, removeCookie] = useCookies(["user"])
	const handleLogout = async () => {
		try {
			await logout();
			removeCookie("user", { path: "/" })
			router.push('/')
		} catch (error) {
			throw new Error("error logout")
		}
	}
	useEffect(() => {
		// if (!cookie.user) {
		// 	router.push('/')
		// }
	}, [cookie]);

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

// export async function getStaticProps() {
// 	Router.
// }

export default ProfilePage;