import {checkAuth} from 'fake-backend';
import {HIDE_MODAL} from './modal';
import {setUserInStorage} from "helpers";
import {userActionTypes} from "store/types";
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
            type: userActionTypes.LOGOUT,
            payload: {}
        });
    };
};


