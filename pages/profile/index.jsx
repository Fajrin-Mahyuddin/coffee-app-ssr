import { StandartLayout } from "layout";
import { useRouter } from "next/router";
import nookies from "nookies";
import { AuthenticatedRoute, redirectTo, useAppContext } from "utils/auth";
import admin from "utils/firebase-admin";
import { logout } from "utils/firebase-auth";

const ProfilePage = () => {
	const router = useRouter()
	const { authUser, loading } = useAppContext()
	const handleLogout = async () => {
		try {
			await logout();
			router.push('/')
		} catch (error) {
			throw Error("error logout")
		}
	}


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

export const getServerSideProps = async (ctx) => {
	const { res } = ctx

	const token = nookies.get(ctx);
	// const { email, diplayName } = user
	if (token.token) {
		const user = await admin.auth().verifyIdToken(token.token)
		console.log("profile page", user)
		if (!user) {
			redirectTo('/login', res)
		}
		return {
			props: {}
		}
	}
	redirectTo('/login', res)
	return {
		props: {}
	}

}


export default ProfilePage;