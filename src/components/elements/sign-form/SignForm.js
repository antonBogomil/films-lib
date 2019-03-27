import React, {Component} from 'react';
import style from './sign-form.module.scss';
import classNames from 'classnames';
import * as T from "prop-types";
import Button from "../button/Button";
import LoginContainer from "../../../containers/LoginContainer";

class SignForm extends Component {
    state = {
        active: 'signIn'
    };
    handleChangeActive = (type) => {
        this.setState({
            active: type
        })
    };

    render() {
        const {active} = this.state;
        console.log(active);
        return (
            <div className={style.container}>
                <div className={style.formContainer}>
                    {
                        active === 'signUp' ?
                            <div className={classNames(style.form, style.form_up)}>
                                <form action="#">
                                    <h4>Create Account</h4>
                                    <div>
                                        <Button variant={"small"}>Sign up</Button>
                                    </div>
                                </form>
                            </div>
                            :
                            <div className={classNames(style.form, style.form_in)}>
                                <form action="#">
                                    <h4>Sign in</h4>
                                    <LoginContainer/>
                                </form>
                            </div>
                    }
                </div>
                <div className={classNames(style.overlay, style[active])}>
                    {
                        active === 'signUp' ?
                            <div className={classNames(style.overlaySignIn)}>
                                <h3>Hello, Friend!</h3>
                                <p>Enter your personal details and start journey with us</p>
                                <div className={style.btnContainer}>
                                    <Button
                                        onClick={() => {
                                            this.handleChangeActive('signIn')
                                        }}
                                        variant={"animated"}
                                    >
                                        Sign in
                                    </Button>
                                </div>
                            </div>
                            :
                            <div className={style.overlaySignUp}>
                                <h3>Welcome Back!</h3>
                                <p> To keep connected with us please login with your personal info</p>
                                <div className={style.btnContainer}>
                                    <Button
                                        onClick={() => {
                                            this.handleChangeActive('signUp')
                                        }}
                                        variant={"animated"}
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
export default SignForm;