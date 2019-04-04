import {userActionTypes} from 'store/types';
import {api} from 'api';
import {API_AUTH, API_LOGIN, API_LOGOUT} from 'const/api';

export const login = (params, callback) => {
	return dispatch => {
		api.post(API_LOGIN, params, (data) => {
			if (data.success) {
				dispatch({
					type: userActionTypes.LOGIN,
					payload: {}
				});
			} else {
				dispatch({
					type: userActionTypes.LOGIN_FAIL,
					payload: {
						message: data.message
					}
				});
			}
		}).finally(() => {
			if (typeof callback === 'function') {
				callback();
			}
		});
	};
};
export const checkAuth = () => {
	return dispatch => {
		api.get(API_AUTH, (data) => {
			console.log(data);
			if (data && data.isAuth) {
				dispatch({
					type: userActionTypes.LOGIN,
					payload: {
						name: data.name,
						email: data.email,
						admin: data.isAdmin,
					}
				});
			}
		});
	};
};

export const logout = () => {
	return dispatch => {
		api.get(API_LOGOUT, (data) => {
			if (data.success) {
				dispatch({
					type: userActionTypes.LOGOUT,
				});
			}
		});
	};
};


