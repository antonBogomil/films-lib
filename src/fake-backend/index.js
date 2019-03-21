import {setUserInStorage} from "../helpers";

const USERNAME = 'admin';
const PASSWORD = '123';
export const checkAuth = (params) => {
	if (params.username === USERNAME && params.password === PASSWORD){
        setUserInStorage(params);
		return true
	}
};