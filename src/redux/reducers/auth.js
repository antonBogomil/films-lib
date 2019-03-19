import {LOGIN, LOGIN_FAIL, LOGOUT} from '../actions/auth';

const initialState = {
	user: undefined,
	errorMessage: undefined,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				user: {
					name: action.payload.name,
				}
			};
		case LOGOUT :
			return {
				user: undefined
			};
		case LOGIN_FAIL: {
			return {
				errorMessage: action.payload.message
			};
		}
		default:
			return state;
	}
};
export default authReducer;