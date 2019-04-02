import React from 'react';
import './spinner.scss';
import * as T from 'prop-types';
// import img from 'assets/walk.gif';

const Preloader = ({size='s'}) => {
	return (
		<div className={`preload-container preload-container_${size}`}>
			<div className="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
Preloader.propTypes = {
	size: T.oneOf(['s', 'm', 'l']),
};
export default Preloader;