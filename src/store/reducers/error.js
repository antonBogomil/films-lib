import {errorActionTypes} from '../types';

const initialState = {
	status: false,
	message: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case errorActionTypes.SERVER_ERROR:
			return {
				status: true,
				message: action.payload.message
			};
		default:
			return {
				status: false,
				message: null
			};
	}
};
