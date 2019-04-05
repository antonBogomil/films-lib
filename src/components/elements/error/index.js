import React, {Component} from 'react';
import {ERROR} from 'const/Constants';
import errorImg from 'assets/burp.gif';
import './error.scss';
export default class ErrorCatch extends Component {
	state = {
		error: false,
	};

	componentDidCatch(error, errorInfo) {
		this.setState({error: true});
	}

	render() {
		if (this.state.error) {
			return (
				<ErrorIndicator>
					<div className='error-container'>
						{ERROR.FATAL}
						<img alt='error-img' src={errorImg}/>
					</div>
				</ErrorIndicator>
			);
		} else {
			return this.props.children;
		}
	}
}

export const ErrorIndicator = ({children}) => {
	return (
		<div className='error-indicator'>
			{children}
		</div>
	);
};
