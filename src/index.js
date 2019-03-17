import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store';
import {Provider} from 'react-redux';
import api from './services';
import {ServiceProvider} from './service-context';
import ErrorCatch from './components/elements/error';
import {BrowserRouter} from 'react-router-dom';
import './styles/default.scss';

ReactDOM.render(
	<Provider store={store}>
		<ErrorCatch>
			<ServiceProvider value={api}>
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</ServiceProvider>
		</ErrorCatch>
	</Provider>,
	document.getElementById('root')
);