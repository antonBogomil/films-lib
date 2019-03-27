import {userActionTypes} from '../types';

const initialState = {
	user: undefined,
	errorMessage: undefined,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case userActionTypes.LOGIN:
			return {
				user: {
					name: action.payload.name,
				}
			};
		case userActionTypes.LOGOUT :
			return {
				user: undefined
			};
		case userActionTypes.LOGIN_FAIL: {
			return {
				errorMessage: action.payload.message
			};
		}
		default:
			return state;
	}
};
export default authReducer;