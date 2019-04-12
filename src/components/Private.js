import React from 'react';
import Header from './header';
import MenuContainer from '../containers/MenuContainer';
import {Route, Switch} from 'react-router-dom';
import Main from './pages/main';
import Footer from './footer';
import ModalsContainer from '../containers/ModalsContainer';
import ErrorPage from './pages/error/ErorrPage';
import {ERROR} from '../const/Constants';
import ListContainer from '../containers/ListContainer';
import AuthCheck from './hoc/AuthCheck';

const Private = () => {
	return (
		<div className="app-container">
			<Header menu={<MenuContainer/>}/>
			<main className='content'>
				<Switch>
					<Route exact path='/' component={AuthCheck(Main)}/>
					<Route exact path='/films' component={AuthCheck(ListContainer)}/>
					<Route exact path='/films/add' component={AuthCheck(() => <h1>ADd new</h1>, null, true)}/>
					{/*<Route exact path='/films/:id' component={() => <h2>Hello item</h2>}/>*/}
					{/*<Route exact path='/profile' component={null}/>*/}
					{/*<Route exact path='/faq' component={null}/>*/}
					<Route component={() => (<ErrorPage message={ERROR.PAGE_NOT_FOUND}/>)}/>
				</Switch>
			</main>
			<Footer/>
			<ModalsContainer/>
		</div>
	);
};
export default Private;