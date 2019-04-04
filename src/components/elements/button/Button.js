import React from 'react';
import './button.scss';
import * as PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const Button = ({children, onClick,loading=false, icon, href, to, variant = 'default', type = 'submit'}) => {
	const className = 'btn ' + variant;
	if (loading===false){
		if (href) {
			return (
				<a href={href} className={className}>
					{children}
				</a>
			);

		}
		if (to) {return(
			<NavLink to={to} exact activeClassName='active'>
				{children}
			</NavLink>);
		} else {
			return (
				<button onClick={onClick} type={type} className={className}>
					<span>{children}</span>
					{icon && <span className={'btn-icon'}>{icon}</span>}
				</button>
			);
		}
	}

};

Button.propTypes = {
	children: PropTypes.string.isRequired,
	icon: PropTypes.object,
	onClick: PropTypes.func,
	href: PropTypes.string,
	type: PropTypes.oneOf(['submit', 'reset']),
	variant: PropTypes.oneOf(['animated', 'small', 'filled']),
};
export default Button;