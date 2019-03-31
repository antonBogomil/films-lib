import React from 'react';
import Header from './header';
import MenuContainer from '../containers/MenuContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/main';
import List from './pages/list';
import NotFound from './elements/notFound/NotFound';
import Footer from './footer';
import ModalsContainer from '../containers/ModalsContainer';

const Private = () => {
	return (
		<div className="app-container">
			<Header menu={<MenuContainer/>}/>
			<div className='wrapper'>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Main}/>
						<Route exact path='/films' component={() => (<List/>)}/>
						<Route exact path='/films/:id' component={null}/>
						<Route exact path='/profile' component={null}/>
						<Route exact path='/faq' component={null}/>
						<Route component={NotFound}/>
					</Switch>
				</BrowserRouter>
			</div>
			<Footer/>
			<ModalsContainer/>
		</div>
	);
};
export default Private;