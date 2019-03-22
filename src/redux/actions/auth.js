import {checkAuth} from 'fake-backend';
import {HIDE_MODAL} from './modal';
import {setUserInStorage} from "helpers";

export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const login = (params) => {
    return dispatch => {
        if (checkAuth(params)) {
            setUserInStorage(params);
            dispatch({
                type: LOGIN,
                payload: {
                    name: params.username,
                }
            });
            dispatch({
                type: HIDE_MODAL,
            });
        } else {
            dispatch({
                type: LOGIN_FAIL,
                payload: {
                    message: 'Incorrect username or password entered. Please try again.'
                }
            });
        }
    };
};
export const logout = () => {
    setUserInStorage();
    return dispatch => {
        dispatch({
            type: LOGOUT,
            payload: {}
        });
    };
};


