import React from 'react';
import './button.scss';
import * as PropTypes from 'prop-types';

const Button = ({children, onClick, type, href, variant}) => {
	const className = 'btn ' + variant;
	if (href) {
		return (
			<a href={href} className={className}>
				{children}
			</a>
		);
	} else {
		return (
			<button onClick={onClick} type={type} className={className}>
				{children}
			</button>
		);
	}
};
Button.propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	href: PropTypes.string,
	type: PropTypes.oneOf(['submit', 'reset']),
	variant: PropTypes.oneOf(['animated', 'small','filled']),
};
export default Button;