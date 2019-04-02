// import {checkAuth} from 'fake-backend';
// import {HIDE_MODAL} from './modal';
import {setUserInStorage} from 'helpers';
import {userActionTypes} from 'store/types';
// import {ERROR} from 'const/errors';
import {api} from 'api';
import {API_AUTH, API_LOGIN, API_LOGOUT} from 'const/api';

export const login = (params) => {
	return dispatch => {
		api.post(API_LOGIN, params).then((res) => {
			if (res.data.success) {
				dispatch({
					type: userActionTypes.LOGIN,
					payload: {}
				});
			}
			else {
				dispatch({
					type: userActionTypes.LOGIN_FAIL,
					payload: {
						message: res.data.message
					}
				});
			}
		});
	};
};
export const checkAuth = () => {
	return dispatch => {
		api.get(API_AUTH).then((res) => {
			if (res.data.isAuth) {
				dispatch({
					type: userActionTypes.LOGIN,
					payload: {
						name: res.data.name,
						email: res.data.email,
						admin: res.data.isAdmin,
					}
				});
			}
		}).catch((e) => {
			console.log(e);
		});
	};
};

export const logout = () => {
	return dispatch => {
		api.get(API_LOGOUT).then((res) => {
			if (res.data.success) {
				dispatch({
					type: userActionTypes.LOGOUT,
				});
			}
		});
	};
};


