import axios from 'axios';

const request = axios.create({
	baseURL: "https://rapidapi.p.rapidapi.com/api/search/",
	timeout: 9000,
	headers: {
		"x-rapidapi-key": "a8dc93f25emshf71e5c6d9da2cdfp1769a6jsnd592d22f793a",
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
	}
})

export { request };