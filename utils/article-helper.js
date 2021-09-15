import { request } from "config/axiosConfig";

export const getArticles = async (limit = 5) => {
	const { data } = await request.get(`posts`)
	return data.slice(0, 5)
}