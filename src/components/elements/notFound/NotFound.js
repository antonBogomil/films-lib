import React from 'react'
import {PAGE_NOT_FOUND,TRY_THIS_LINKS} from 'const/dictionary';
import {NavLink} from 'react-router-dom';

const NotFound = ({ data }) => {
	return (
		<React.Fragment>
			<h2>{PAGE_NOT_FOUND}</h2>
			<p>{TRY_THIS_LINKS}</p>
			<NavLink to='/'>Home</NavLink>
		</React.Fragment>
	)
};

export default NotFound
