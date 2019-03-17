import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import Button from '../button';
import {connect} from 'react-redux';
import Input from '../input/Input';
import './login.scss';

class Login extends React.Component {
	state = {
		username: '',
		password: '',
	};
	handleSubmit = e => {
		e.preventDefault();
		const {username, password} = this.state;
		this.props.logIn({username, password});
	};

	handleChange = (e, name) => {
		const value = e.currentTarget.value;
		this.setState(prev => ({
			...prev,
			[name]: value,
		}));
	};

	render() {
		const {location, errorMsg} = this.props;
		const {username, password,} = this.state;
		return (
			<div className='login-container'>
				{errorMsg && <p>{errorMsg}</p>}
				<form onSubmit={this.handleSubmit}>
					<div>
						<Input type='text' placeholder={'username'} value={username} onChange={(e) => {
							this.handleChange(e, 'username');
						}}/>
					</div>
					<div>
						<Input type='password' value={password} placeholder={'password'} onChange={(e) => {
							this.handleChange(e, 'password');
						}}/>
					</div>
					<Button type="submit" variant={'small'}>Log in</Button>
				</form>
			</div>
		);
	}
}

Login.propTypes = {
	logIn: PropTypes.func.isRequired,
	errorMessage: PropTypes.string,
};
export default Login;