const initialState = {
	films: []
};

const filmsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FILMS_LOADED':
			return {
				films: action.payload
			};
		default:
			return state
	}
};
export default filmsReducer;