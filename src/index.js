import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import store from 'store';
import {Provider} from 'react-redux';
import ErrorCatch from 'components/elements/error';
import {BrowserRouter} from 'react-router-dom';
import './styles/default.scss';
import {checkUserFromStorage} from "./helpers";
checkUserFromStorage();
ReactDOM.render(
	<ErrorCatch>
		<Provider store={store}>
			<App/>
		</Provider>
	</ErrorCatch>,
	document.getElementById('root')
);