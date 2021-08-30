import nookies from "nookies";
import { useEffect } from "react";
import { StandartLayout } from "layout";
import { useRouter } from "next/router";
import admin from "utils/firebase-admin";
import { logout } from "utils/firebase-auth";
import { redirectTo, useAppContext } from "utils/auth";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterState, funFilter, queryState, stateStatistics } from "utils/recoil-state";

const ProfilePage = () => {
	const state_global = useRecoilValue(funFilter);
	const statistics = useRecoilValue(stateStatistics);
	const fetchingData = useRecoilValue(queryState);
	const [filter, setFilter] = useRecoilState(filterState)
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
	console.log("state global", fetchingData);
	if (!fetchingData) {
		return <h1>wait a second...</h1>
	} else {

		return (
			<StandartLayout>
				<StandartLayout.Content>
					<button onClick={handleLogout}>
						logout
					</button>
					{/* total : {state_global.leng}
				<select value={filter} name="bla" id="bla" onChange={(e) => setFilter(e.target.value)}>
					<option value="">pilih</option>
					<option value="one">one</option>
					<option value="two">two</option>
				</select>
				<ul>
					{state_global?.list.map((item, i) => {
						return <li key={i}>{item.foo}</li>
					})}
				</ul> */}
				</StandartLayout.Content>
			</StandartLayout>
		)
	}

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