export default class FilmService {
	_baseUrl = 'https://5c7e53e408d03100141af39b.mockapi.io/api/v1';

	getFilms() {
		fetch(this._baseUrl + '/films/')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
			}).catch((e) => {
				console.log(e);
		});
	}
}