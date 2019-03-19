import React from 'react';
import {NavLink} from 'react-router-dom';
import './menu.scss';
import Button from '../button';
import IconExit from  'react-icons/lib/md/exit-to-app'
const Menu = (props) => {
	const {showModal,user,logout} = props;
	return (
		<ul className='menu'>
			<li>
				<NavLink activeClassName='active' exact to="/">Home</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' exact to="/films">Films</NavLink>
			</li>
			<li><Button
				variant={''}
				onClick={()=>{
				props.showModal('CONTACT');
			}}>Contact us</Button></li>
			<li>
				{
					!user ? <Button
						variant={'filled'}
						onClick={()=>{
							showModal('LOGIN');}}>
						Log in
					</Button> :
						<Button onClick={logout} variant={''} icon={<IconExit/>}>Log out</Button>
				}
			</li>

		</ul>
	);
};

Menu.propTypes = {};

export default Menu;