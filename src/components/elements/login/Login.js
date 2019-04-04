import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Input from '../input/Input';
import './login.scss';
import {ErrorIndicator} from '../error';
import Preloader from '../preloader';

class Login extends React.Component {
	state = {
		email: '',
		password: '',
		loading: false,
	};
	handleSubmit = e => {
		e.preventDefault();
		this.setState({
			loading: true,
		});
		const {email, password} = this.state;
		this.props.login({email, password}, (data) => {
			this.setState({loading: false});
		});
	};

	handleChange = (e, name) => {
		const value = e.currentTarget.value;
		this.setState(prev => ({
			...prev,
			[name]: value,
		}));
	};

	render() {
		const {error} = this.props;
		const {email, password, loading} = this.state;
		return (
			<div className='login-container'>
				{error && <ErrorIndicator>{error}</ErrorIndicator>}
				{
					loading ? <Preloader size={'l'}/> : <form>
						<div>
							<Input type='email' placeholder={'email'} value={email} onChange={(e) => {
								this.handleChange(e, 'email');
							}}/>
						</div>
						<div>
							<Input type='password' value={password} placeholder={'password'} onChange={(e) => {
								this.handleChange(e, 'password');
							}}/>
						</div>
						<Button onClick={(e) => {
							this.handleSubmit(e);
						}}
								type={'submit'}
								variant={'filled'}>Log in</Button>

					</form>
				}
			</div>

		);
	}
}

Login.propTypes = {
	login: PropTypes.func.isRequired,
	error: PropTypes.string,
};
export default Login;