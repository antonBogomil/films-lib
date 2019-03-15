import React from 'react';
import Menu from '../parts/menu';
import {NavLink} from 'react-router-dom';
import './header.scss';

const Header = (props) => {
	console.log(props);
	return (
		<header className='main-header'>
			<div className='wrapper'>
				<div className='main-header-container'>
					<div className='left-item'>
						<NavLink activeClassName='active' to='/'>
							{/*<img alt='logo' src={null}/>*/}
							<div className='logo'>
								<span>My</span>
								<span>Logo</span>
							</div>
						</NavLink>
					</div>
					<div className='right-item'>
						<Menu/>
					</div>
				</div>
			</div>
		</header>

	);
};

export default Header;