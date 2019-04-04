import React from 'react'
import './error-page.scss'
const ErrorPage = ({message}) => {
	return (
		<div className='error-page'>
			<h2>{message}</h2>
		</div>
	)
};

export default ErrorPage
