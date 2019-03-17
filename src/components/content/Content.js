import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from '../pages/main';
import FilmList from '../pages/list/FilmList';
import './content.scss';
import NotFound from '../notFound/NotFound';
import LoginContainer from '../../containers/LoginContainer';
import Routes from '../router/Routes';
const Content = ({modalOpen}) => {
	return (
		<main className='main-content'>
			<div className='wrapper'>
				<Routes/>
			</div>
		</main>
	);
};

export default Content;