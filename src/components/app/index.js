import React, {Component} from 'react';
import './app.scss';
import withService from 'hoc';
import Header from '../header';
import Footer from '../footer';
import Content from '../content';
const App = ({service}) => {
	return (
		<div className="app-container">
			<Header/>
			<Content/>
			<Footer/>
		</div>
	);
};
App.propTypes = {};

export default withService()(App);