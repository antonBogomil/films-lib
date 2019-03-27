import {applyMiddleware, compose, createStore} from 'redux';
import reducer from 'store/reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const middleware = [thunk];
// if (process.env.NODE_ENV !== 'production') {
// 	middleware.push(createLogger());
// }
const store = createStore(reducer,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;