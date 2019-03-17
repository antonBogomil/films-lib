import {checkAuth} from '../fake-backend';

export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const logIn = (params) => {
	return dispatch => {
		console.log(params);
		dispatch({
			type: LOGIN,
			payload: {
				name: params.username
			}
		});
	};
};
export const logOut = () => {
	return dispatch => {
		dispatch({
			type: LOGOUT,
			payload: {}
		});
	};
};


