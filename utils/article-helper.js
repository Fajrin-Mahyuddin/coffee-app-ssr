import { request } from "config/axiosConfig";

export const getArticles = async (limit = 5) => {
	return await request.get(`TrendingNewsAPI?pageNumber=1&pageSize=${limit}&withThumbnails=false&location=us`)
}