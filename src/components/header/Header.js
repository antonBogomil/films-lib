import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.scss';
import MenuContainer from 'containers/MenuContainer';

const Header = ({menu}) => {
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
						{menu}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;