import React from 'react';
import PropTypes from 'prop-types';
import './login.scss';
import {ErrorIndicator} from '../error';
import Preloader from '../preloader';

const Login = ({error,form,loading})=>{
	return(
		<div className='login-container'>
			{error && <ErrorIndicator>{error}</ErrorIndicator>}
			{
				loading ? <Preloader size={'l'}/> : form
			}
		</div>
	)
};
Login.propTypes = {
	login: PropTypes.func.isRequired,
	error: PropTypes.string,
};
export default Login;

