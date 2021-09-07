import { atom, selector } from "recoil";

export const basketList = atom({
	key: 'basket-list',
	default: []
})

export const basketFun = selector({
	key: 'basket-function',
	get: ({ get }) => {
		const list = get(basketList);
		return { total: list.length }
	}
})