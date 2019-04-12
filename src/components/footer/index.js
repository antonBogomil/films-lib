import React from 'react';
import './footer.scss';
import NavLink from 'react-router-dom/es/NavLink';

const Footer = () => {
	return (
		<footer className='main-footer'>
			<div className='f-top'>
				<div className='f-overlay'/>
				<div className='f-image'/>
				<div className='wrapper'>
					<div className='footer-content'>
						<div>
							<h6>Contact</h6>
							<ul>
								<li><a className='phone'>0992135972</a></li>
								<li><a className='email'>anton.bogomil777@gmail.com</a></li>
							</ul>
						</div>
						<div>
							<h6>Top</h6>
							<ul>
								<li>Film 1</li>
								<li>Film 2</li>
								<li>Film 3</li>
								<li>Film 4</li>
								<li>Film 5</li>
							</ul>
						</div>
						<div>
							<h6>Links</h6>
							<ul>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</div>

					</div>
				</div>
			</div>
			<div className='f-bottom'>
				<div className='wrapper'>
					<div className='footer-copyright'>
						<span>Copyright ©2019 All rights reserved | This website is created by <a href='https://t.me/anton_bohomil' style={{textDecoration:'underline'}}>AntonB</a>
						</span>
						<NavLink to='/privacy'>Privacy Policy</NavLink>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;