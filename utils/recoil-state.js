import { atom, selector } from "recoil";

export const dataState = atom({
	key: 'bar',
	default: 'testing state global using recoil'
});
export const filterState = atom({
	key: 'filterState',
	default: ''
});

const exampleData = [
	{
		foo: "bar one",
		arrData: "one"
	},
	{
		foo: "bar two",
		arrData: "two"
	},
	{
		foo: "bar three",
		arrData: "three"
	}
]

const stateGlo = atom({
	key: 'state',
	default: exampleData
})


export const funFilter = selector({
	key: 'funFilter',
	get: ({ get }) => {
		const filter = get(filterState);
		const state = get(stateGlo);

		switch (filter) {
			case 'one':
				const listOne = state.filter(item => item.arrData === 'one')
				return { list: listOne, leng: listOne.length }
			case 'two':
				const listTwo = state.filter(item => item.arrData === 'two')
				return { list: listTwo, leng: listTwo.length }
			default:
				return { list: state, leng: state.length };
		}
	}
})

export const stateStatistics = selector({
	key: 'stateStatistics',
	get: ({ get }) => {
		const list = get(stateGlo);
		const lengthList = list.length

		return {
			lengthList,
		}
	}
})

export const queryState = selector({
	key: 'queryState',
	get: async () => {
		const query = await fetch(`https://fakestoreapi.com/products?limit=5`);
		const jsonQuery = await query.json();
		if (query.error) {
			throw query.error;
		}
		return jsonQuery;
	}
})

export const queryStateTwo = selector({
	key: 'queryState',
	get: async () => {
		const query = await fetch(`https://fakestoreapi.com/products?limit=5`);
		const jsonQuery = await query.json();
		if (query.error) {
			throw query.error;
		}
		return jsonQuery;
	}
})