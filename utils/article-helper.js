import { request } from "config/axiosConfig";

export const getArticles = async () => {
	return await request.get("TrendingNewsAPI?pageNumber=1&pageSize=5&withThumbnails=false&location=us")
}