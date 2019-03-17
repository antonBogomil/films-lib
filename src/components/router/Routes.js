import {Route, Switch} from 'react-router-dom';
import MainPage from '../pages/main';
import FilmList from '../pages/list/FilmList';
import LoginContainer from '../../containers/LoginContainer';
import NotFound from '../notFound/NotFound';
import React from 'react';

const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={MainPage}/>
				<Route exact path='/films' component={FilmList}/>
				<Route exact path='/login' component={LoginContainer}/>
				<Route exact path='/films/:id' component={null}/>
				<Route component={NotFound}/>
			</Switch>
		</>
	);
};
export default Routes;