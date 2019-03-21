import {USER_STORAGE} from "../constants";

const _setStorage = (name, value) => {
    if (name && value) {
        localStorage.setItem(name, value);
    }
};
const _getStorage = (name) => {
    return localStorage.getItem(name)
};

export const getUserFromStorage = () => {
    if (_getStorage(USER_STORAGE)) {
        console.log(_getStorage(USER_STORAGE));
        return JSON.parse(_getStorage(USER_STORAGE));
    }
};
export const setUserInStorage = (user) => {
    _setStorage(USER_STORAGE, JSON.stringify(user))
};