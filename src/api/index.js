import axios from 'axios';
import store from 'store';
import {infoShow} from 'store/actions/info';
const BASE_URL = '/api';

export const api = {
	post: (url, data, callback) => {
		const json = data;
		const config = {
			method: 'POST',
			url: BASE_URL + url,
			headers: {'content-type': 'application/json'},
			data: json
		};
		return axios(config)
			.then((res) => {
				return res.data;
			})
			.then((data) => {
				if (typeof callback === 'function') {
					callback(data);
				}
			})
			.catch((e) => {
				store.dispatch(infoShow(e.message))
			});
	},
	get: (url, callback) => {
		return axios.get(BASE_URL + url)
			.then((res) => {
				return res.data;
			})
			.then((data) => {
				if (typeof callback === 'function') {
					callback(data)
				}
			})
			.catch((e) => {
				store.dispatch(infoShow(e.message))
			});
	}
};