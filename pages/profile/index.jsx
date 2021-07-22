import { StandartLayout } from "layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AuthenticatedRoute, useAppContext } from "utils/auth";
import { logout } from "utils/firebase-auth";

const ProfilePage = () => {
	const router = useRouter()
	const { authUser, loading } = useAppContext()
	const handleLogout = async () => {
		try {
			await logout();
			router.push('/')
		} catch (error) {
			throw new Error("error logout")
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


export default ProfilePage;