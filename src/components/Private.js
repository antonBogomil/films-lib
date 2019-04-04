import React from 'react';
import Header from './header';
import MenuContainer from '../containers/MenuContainer';
import {Route, Switch} from 'react-router-dom';
import Main from './pages/main';
import List from './pages/list';
import Footer from './footer';
import ModalsContainer from '../containers/ModalsContainer';
import ErrorPage from './pages/error/ErorrPage';
import {ERROR} from '../const/errors';

const Private = () => {
	return (
		<div className="app-container">
			<Header menu={<MenuContainer/>}/>
			<div className='wrapper'>
				<Switch>
					<Route exact path='/' component={Main}/>
					<Route exact path='/films' component={() => (<List/>)}/>
					<Route exact path='/films/:id' component={null}/>
					<Route exact path='/profile' component={null}/>
					<Route exact path='/faq' component={null}/>
					<Route component={() => (<ErrorPage message={ERROR.PAGE_NOT_FOUND}/>)}/>
				</Switch>
			</div>
			<Footer/>
			<ModalsContainer/>
		</div>
	);
};
export default Private;