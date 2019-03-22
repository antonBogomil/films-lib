const USERNAME = 'admin';
const PASSWORD = '123';
export const checkAuth = (params) => {
    if (params.username === USERNAME && params.password === PASSWORD) {
        return true
    }
};

export const filmsListData = () => {
    const responseTime = Math.random()*100;
    console.log(`resp time ${responseTime} ms`);
    const t = setTimeout(() => {},responseTime)
};