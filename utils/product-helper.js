import axios from 'axios';

export const getProducts = async (limit = 5) => {
	// return await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
	return await axios.get(`https://dummy-coffee-app.herokuapp.com/products?limit=${limit}`)
}
export const getDetailProduct = async (id) => {
	// return await axios.get(`https://fakestoreapi.com/products/${id}`)
	return await axios.get(`https://dummy-coffee-app.herokuapp.com/product/${id}`)
}