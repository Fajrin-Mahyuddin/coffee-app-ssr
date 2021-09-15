import axios from "axios";
const { useState, useEffect } = require("react");

export const reqCart = async (uid) => {
	try {
		const req = await axios.get(`https://dummy-coffee-app.herokuapp.com/user/cart/${uid}`);
		return req.data;
	} catch (error) {
		throw error;
	}
}

export const getCart = () => {
	const [data, setData] = useState(null);
	useEffect(async () => {
		const req = await reqCart()
		setData(req);
	}, [])
	return data;
};
