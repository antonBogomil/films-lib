const USERNAME = 'admin';
const PASSWORD = '123';
export const checkAuth = (params) => {
    if (params.username === USERNAME && params.password === PASSWORD) {
        return true
    }
};
