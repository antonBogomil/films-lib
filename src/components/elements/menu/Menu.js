import React,{ useState } from 'react';
import {NavLink} from 'react-router-dom';
import './menu.scss';
import Button from '../button';
import IconExit from 'react-icons/lib/md/exit-to-app';
import IconUser from 'react-icons/lib/md/person-outline'

const Menu = (props) => {
	const {isAuth, logout, user} = props;
	const [isOpen,setOpen] = useState(false);
	const handleOpenUserInfo = (e)=>{
		setOpen((isOpen) => !isOpen);
	};
	return (
		<ul className='menu'>
			<li>
				<NavLink activeClassName='active' exact to="/">Home</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' to="/films">Films</NavLink>
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
				<NavLink activeClassName='active' exact to="/contact">Contact</NavLink>
			</li>
			<li>
				<div className={`menu-user-info ${isOpen? 'show': ''}`}>
					<span className={`user-info-icon`} onClick={handleOpenUserInfo}>
						<IconUser/>
					</span>
					<div className='user-info '>
						<span>{user && user.email}</span>
					</div>

				</div>
			</li>
			<li>
				<Button onClick={logout} icon={<IconExit/>}>Log out</Button>
			</li>

		</ul>
	);
};

Menu.propTypes = {};

export default Menu;