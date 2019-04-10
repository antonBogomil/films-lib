import {userActionTypes} from '../types';

const initialState = {
	errorMessage: undefined,
	user: undefined,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case userActionTypes.LOGIN:
			return {
				isAuth: true,
				user: action.payload.user
			};
		case userActionTypes.LOGOUT :
			return {
				isAuth: false,
			};
		case userActionTypes.LOGIN_FAIL: {
			return {
				isAuth: false,
				errorMessage: action.payload.message
			};
		}
		default:
			return state;
	}
};
export default authReducer;