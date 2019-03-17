const API_BASE_URL = 'https://5c7e53e408d03100141af39b.mockapi.io/api/v1';
export default  {
	get: (url, params) => {
		return fetch(`${API_BASE_URL}/${url}`)
			.then(res => {
				console.log(res);
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(res.status);
				}
			})
			.then(json => {
				console.log(json);
			})
			.catch(err => {
				console.warn('Get request error', err);
			});

	}
};
