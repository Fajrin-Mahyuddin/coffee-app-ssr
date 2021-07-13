import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export const getCookieDes = (key) => {
	const [cookie] = useCookies([key])
	const [user, setUser] = useState({})
	useEffect(() => {
		setUser(cookie?.user?.data || {})
	}, [cookie])
	return user
}