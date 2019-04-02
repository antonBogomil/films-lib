import {USER_STORAGE} from "../const";
// import store from 'store';
// import {login} from "store/actions/auth";
const _setStorage = (name, value) => {
    if (name && value) {
        localStorage.setItem(name, value);
    }
};
const _getStorage = (name) => {
    return localStorage.getItem(name)
};
export const checkUserFromStorage = () => {
    if (_getStorage(USER_STORAGE)) {
        // store.dispatch(login(JSON.parse(_getStorage(USER_STORAGE))));
    }
};
export const setUserInStorage = (user) => {
    if (user){
        _setStorage(USER_STORAGE, JSON.stringify(user))
    }
    else {
        localStorage.removeItem(USER_STORAGE);
    }
};