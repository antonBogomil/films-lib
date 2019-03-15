import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from '../pages/main';
import FilmList from '../pages/list/FilmList';
import './content.scss';
const Content = (props) => {
	return (
		<main className='main-content'>
			<div className='wrapper'>
				<Switch>
					<Route exact path='/' component={MainPage} />
					<Route exact path='/films' component={FilmList}/>
					<Route exact path='/films/:id' component={null}/>
				</Switch>
			</div>
		</main>
	);
};

export default Content;