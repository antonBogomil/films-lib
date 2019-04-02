import React, {Component} from 'react';
import style from './sign.module.scss';
import classNames from 'classnames';
import Button from 'components/elements/button';
import LoginContainer from 'containers/LoginContainer';
import RegistrationContainer from '../../../containers/RegistrationContainer';
import Preloader from '../../elements/preloader';

class Sign extends Component {
	state = {
		active: 'signIn',
		sending: null,
	};

	setSending = (isSending) => {
		if (isSending === false) {
			this.setState({
				sending: isSending,
				active: 'signIn',
			});
		} else {
			this.setState({
				sending: isSending
			});
		}
	};

	handleChangeActive = (type) => {
		this.setState({
			active: type
		});
	};

	render() {
		const {active, sending} = this.state;
		return (
			<div className={style.container}>
				<div className={style.formContainer}>
					<div key={1} className={classNames(style.form, style.form_up)}>
						<h3 className={style.c2}>Create Account</h3>
						{
							sending === true ? <Preloader/> : <RegistrationContainer setSending={this.setSending}/>
						}
					</div>
					<div key={2} className={classNames(style.form, style.form_in)}>
						<h3 className={style.c2}>Sign in</h3>
						<LoginContainer/>
					</div>
				</div>

				<div className={classNames(style.overlay, style[active])}>
					{
						active === 'signUp' ?
							<div className={style.overlaySignUp}>
								<h3 className={style.c1}>Welcome Back!</h3>
								<p> To keep connected with us please login with your personal info</p>
								<div className={style.btnContainer}>
									<Button
										onClick={() => {
											this.handleChangeActive('signIn');
										}}
										variant={'animated'}
									>
										Sign in
									</Button>
								</div>
							</div>
							:
							<div className={classNames(style.overlaySignIn)}>
								<h3 className={style.c1}>Hello, Friend!</h3>
								<p>Enter your personal details and start journey with us</p>
								<div className={style.btnContainer}>
									<Button
										onClick={() => {
											this.handleChangeActive('signUp');
										}}
										variant={'animated'}
									>
										Sign up
									</Button>
								</div>
							</div>
					}
				</div>
			</div>
		);
	}
}

// SignForm.propTypes = {};
export default Sign;