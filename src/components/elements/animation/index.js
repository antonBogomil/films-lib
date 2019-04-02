import React from 'react';
import Transition from 'react-transition-group/Transition';

const duration = 300;
const defaultStyle = {
	transition: `opacity ${duration}ms ease-in`,
	opacity: 0,
};

const transitionStyles = {
	entering: {opacity: 0},
	entered: {opacity: 1},
};
const Fade = ({in: inProp, children, duration = 300, ...otherProps}) => (
	<Transition in={inProp} timeout={duration} {...otherProps}>
		{(state) => (
			<div style={{
				...defaultStyle,
				...transitionStyles[state]
			}}>
				{children}
			</div>
		)}
	</Transition>
);
export default Fade;