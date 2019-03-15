import React from 'react';
import './button.scss'
import * as PropTypes from 'prop-types';
const Button = ({children,onClick,href,type}) => {
	return (
		<a href= {href} onClick={onClick} className={`btn `+type}>
			{children}
		</a>
	);
};
Button.defaultProps = {
	href: '/',
	onClick: null
};
Button.propTypes = {
	href: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['animated', 'small']),
};

export default Button;