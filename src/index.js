import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import store from './store';
import {Provider} from 'react-redux';
import ErrorCatch from 'components/elements/error';
import './styles/default.scss';
import {checkAuth} from './store/actions/auth';
store.dispatch(checkAuth());
ReactDOM.render(
	<ErrorCatch>
		<Provider store={store}>
			<App/>
		</Provider>
	</ErrorCatch>,
	document.getElementById('root')
);