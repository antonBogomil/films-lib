const USERNAME = 'admin';
const PASSWORD = '123';
export const checkAuth = (params) => {
	return params.username === USERNAME && params.password === PASSWORD;
};