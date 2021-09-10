import { atom, selector, useRecoilState } from "recoil";
import axios from "axios";
import { getFirebaseAuth } from "utils/auth";

export const basketList = atom({
	key: 'cartList',
	default: 0
})

export const addToCart = (data) => {
	return axios.post('http://localhost:8181/product/cart/add', { data }, {
		headers: {
			'content-type': 'application/json'
		}
	})
}

// export const basketFun = selector({
// 	key: 'basket-function',
// 	get: ({ get }) => {
// 		const list = get(basketList);
// 		const total = Number(list.length) || false;
// 		return { total: total }
// 	}
// })

export const getDataCart = selector({
	key: "GetCart",
	get: async () => {
		const [authUser] = getFirebaseAuth();
		let req;
		try {
			if (authUser) {
				req = await axios.get('http://localhost:8181/user/cart');
			} else {
				req = { data: [] };
			}
			return req.data
		} catch (error) {
			throw error
		}
	},
	set: ({ set }, newVal) => set(basketList, newVal)
})


export const getDataCartCount = selector({
	key: "GetCartCount",
	get: async () => {
		try {
			const req = await axios.get('http://localhost:8181/user/cart');
			return req.data.length.toString();
		} catch (error) {
			throw error
		}
	}
})


