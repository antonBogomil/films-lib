import React, {Component} from 'react';
import './app.scss';
import Header from '../header';
import Footer from '../footer';

import Content from '../content';

const App = (props) => {

	return (
		<div className="app-container">
			<Header/>
			<Content/>
			<Footer/>

		</div>
	);
};
App.propTypes = {};

export default App;