import React from 'react';
import './button.scss';
import * as PropTypes from 'prop-types';

const Button = ({children, onClick = undefined, type='',icon, href, variant='default'}) => {
	const className = 'btn ' + variant;
	if (href) {
		return (
			<a href={href} className={className}>
				{children}
			</a>
		);
	} else {
		return <button onClick={onClick} type={type} className={className}>
			<span>{children}</span>
			{icon&& <span className={'btn-icon'}>{icon}</span>}
		</button>;
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