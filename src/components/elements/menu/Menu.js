import React from 'react';
import {NavLink} from 'react-router-dom';
import './menu.scss';
import Button from '../button';
import IconExit from 'react-icons/lib/md/exit-to-app';

const Menu = (props) => {
	const { isAuth, logout} = props;
	return (
		<ul className='menu'>
			<li>
				<NavLink activeClassName='active' exact to="/">Home</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' exact to="/films">Films</NavLink>
			</li>
			{isAuth &&
			<li>
				<NavLink activeClassName='active' exact to="/profile">Profile</NavLink>
			</li>
			}
			<li>
				<NavLink activeClassName='active' exact to="/faq">FAQ</NavLink>
			</li>
			<li>
				<Button
					onClick={() => {
						props.showModal('CONTACT');
					}}>
					Contact us
				</Button>
			</li>
			<li>
				<Button onClick={logout} icon={<IconExit/>}>Log out</Button>
			</li>

		</ul>
	);
};

Menu.propTypes = {};

export default Menu;