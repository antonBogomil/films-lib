import React from 'react';
import {NavLink} from 'react-router-dom';
import './menu.scss';
import Button from '../button';

const Menu = props => {
	return (
		<ul className='menu'>
			<li>
				<NavLink activeClassName='active' exact to="/">Home</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' exact to="/films">Films</NavLink>
			</li>
			<li><Button >Contact us</Button></li>
		</ul>
	);
};

Menu.propTypes = {};

export default Menu;