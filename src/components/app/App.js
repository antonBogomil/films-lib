import React, {Component} from 'react';
import './app.scss';
import Footer from '../footer';
import {Route, Switch} from 'react-router-dom';
import MainPage from '../pages/main';
import List from '../pages/list';
import LoginContainer from '../../containers/LoginContainer';
import NotFound from '../elements/notFound/NotFound';
import ModalsContainer from '../../containers/ModalsContainer';
import Header from 'components/header';

const App = (props) => {
    return (
        <div className="app-container">
            <Header/>
            <div className='wrapper'>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/films' component={() => (<List/>)}/>
                    <Route exact path='/films/:id' component={null}/>
                    <Route exact path='/profile' component={null}/>
                    <Route exact path='/faq' component={null}/>
                    <Route exact path='/login' component={LoginContainer}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
            <Footer/>
            <ModalsContainer/>
        </div>
    );
};
App.propTypes = {};

export default App;