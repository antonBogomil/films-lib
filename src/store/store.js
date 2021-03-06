import {applyMiddleware, compose, createStore} from 'redux';
import reducer from '../store/reducers';
import thunk from 'redux-thunk';
const middleware = [thunk];
const store = createStore(reducer,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
export default store;