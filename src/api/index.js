import axios from 'axios';

const BASE_URL = '/api';
export const api = {
	post: (url, data) => {
		const json = data;
		const config = {
			method: 'POST',
			url: BASE_URL + url,
			headers: { 'content-type': 'application/json' },
			data: json
		};
		return axios(config).catch(errorCatch);
	},
	get: (url) => {
		return axios.get(BASE_URL + url).catch(errorCatch);
	}
};
const errorCatch = (e) => {
	console.log(e);
};