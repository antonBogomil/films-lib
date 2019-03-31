// import {API_BASE_URL} from '../const';
import axios from 'axios';
export const api = {
	createUser: function (user, callback) {
		axios.post('/users/register', user)
			.then((res) => {
				return res
			})
			.then((json) => {
				console.log(json);
				callback(json);
			})
			.catch((e)=>{
				console.log(e);
				return false
			})
	},
};