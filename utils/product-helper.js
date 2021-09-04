import axios from 'axios';

export const getProducts = async (limit) => {
	return await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
}
export const getDetailProduct = async (id) => {
	return await axios.get(`https://fakestoreapi.com/products/${id}`)
}