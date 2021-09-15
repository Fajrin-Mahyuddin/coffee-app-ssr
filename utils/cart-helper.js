import axios from "axios";
const { useState, useEffect } = require("react");

export const reqCart = async (uid) => {
	try {
		const req = await axios.get(`http://localhost:8181/user/cart/${uid}`);
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
