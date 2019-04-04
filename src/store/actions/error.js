import {errorActionTypes} from '../types';
export const serverError = (message) => {
	return dispatch => {
		dispatch({
			type: errorActionTypes.SERVER_ERROR,
			payload: {
				message : message
			}
		});
	};
};
