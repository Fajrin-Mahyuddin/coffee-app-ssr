import nookies from "nookies";
import { useEffect } from "react";
import { StandartLayout } from "layout";
import { useRouter } from "next/router";
import admin from "utils/firebase-admin";
import { logout } from "utils/firebase-auth";
import { redirectTo, useAppContext } from "utils/auth";

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

	const token = nookies.get(ctx);
	let props;
	if (!token.token) {
		redirectTo('/login', ctx.res)
	} else {
		await admin.auth().verifyIdToken(token.token)
			.then(response => {
				if (!response) {
					redirectTo('/login', ctx.res)
				}
			}).catch(error => {
				props = { ...error }
			})
	}
	return {
		props: { ...props }
	}

}


export default ProfilePage;