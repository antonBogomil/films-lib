import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Input from '../input/Input';
import './login.scss';
import ErrorCatch, {ErrorIndicator} from '../error';

class Login extends React.Component {
	state = {
		username: '',
		password: '',
	};
	handleSubmit = e => {
		e.preventDefault();
		const {username, password} = this.state;
		this.props.login({username, password});
	};

	handleChange = (e, name) => {
		const value = e.currentTarget.value;
		this.setState(prev => ({
			...prev,
			[name]: value,
		}));
	};

	render() {
		const {location, error, login} = this.props;
		const {username, password,} = this.state;
		return (
			<form>
				<div className='login-container'>
					{error && <ErrorIndicator>{error}</ErrorIndicator>}
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
					<Button onClick={(e) => {
						this.handleSubmit(e);
					}} variant={'filled'}>Log in</Button>

				</div>
			</form>
		);
	}
}

Login.propTypes = {
	login: PropTypes.func.isRequired,
	error: PropTypes.string,
};
export default Login;