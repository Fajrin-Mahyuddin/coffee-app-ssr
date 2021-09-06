import axios from 'axios';

export const getProducts = async (limit = 5) => {
	// return await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
	return await axios.get(`http://localhost:8181/products?limit=${limit}`)
}
export const getDetailProduct = async (id) => {
	// return await axios.get(`https://fakestoreapi.com/products/${id}`)
	return await axios.get(`http://localhost:8181/product/${id}`)
}