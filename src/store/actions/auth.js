import {checkAuth} from 'fake-backend';
import {HIDE_MODAL} from './modal';
import {setUserInStorage} from "helpers";
import {userActionTypes} from "store/types";
import {ERROR} from '../../const';
export const login = (params) => {
    return dispatch => {
        if (checkAuth(params)) {
            setUserInStorage(params);
            dispatch({
                type: userActionTypes.LOGIN,
                payload: {
                    name: params.username,
                }
            });
            dispatch({
                type: HIDE_MODAL,
            });
        } else {
            dispatch({
                type: userActionTypes.LOGIN_FAIL,
                payload: {
                    message: ERROR.WRONG_LOGIN
                }
            });
        }
    };
};
export const logout = () => {
    setUserInStorage();
    return dispatch => {
        dispatch({
            type: userActionTypes.LOGOUT,
            payload: {}
        });
    };
};


