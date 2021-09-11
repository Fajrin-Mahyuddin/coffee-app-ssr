import nookies from "nookies";
import { useEffect, useState } from "react";
import { StandartLayout } from "layout";
import { useRouter } from "next/router";
import admin from "utils/firebase-admin";
import { logout } from "utils/firebase-auth";
import { redirectTo, useAppContext } from "utils/auth";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { filterState, funFilters, queryState, stateStatistics } from "utils/recoil-state";

const ProfilePage = ({ pageLoading }) => {
	const state_global = useRecoilValue(funFilters);
	const statistics = useRecoilValue(stateStatistics);
	const query = useRecoilValueLoadable(queryState);
	const [filter, setFilter] = useRecoilState(filterState)
	const router = useRouter();
	const [isLoading, setLoading] = useState(false);
	const [isMounted, setMounted] = useState(false);
	const { authUser, loading } = useAppContext();

	const handleLogout = async () => {
		setLoading(true)
		try {
			const singout = await logout();
			router.push('/');
			singout && setLoading(false)
		} catch (error) {
			setLoading(false)
			throw Error("error logout")
		}
	}

	// useEffect(() => {
	// 	setMounted(true)
	// 	return () => setMounted(false)
	// }, [])

	// console.log("state global", query);
	if (query.state === 'loading') return <h1> fetching data...</h1>
	if (isLoading) return <h1> signout...</h1>
	if (pageLoading) return <div>Loading...</div>
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<div>
					<button onClick={handleLogout}>
						logout
					</button>
				</div>
				{/* total : {state_global.leng}
				<select value={filter} name="bla" id="bla" onChange={(e) => setFilter(e.target.value)}>
					<option value="">pilih</option>
					<option value="one">one</option>
					<option value="two">two</option>
				</select>
			*/}
				<ul>
					{/* {query.contents && query.contents.map((item, i) => {
						return <li key={i}>{item.title}</li>
					})} */}
				</ul>
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