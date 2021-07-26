import axios from 'axios';

export const getProducts = async () => {
	return await axios.get(`https://fakestoreapi.com/products?limit=5`)
}