import {FIELD} from '../const';
import React, {Component} from 'react';
import Form from '../components/elements/form';
import {api} from 'api';
import {API_REGISTER} from '../const/api';
import {infoShow} from '../store/actions/info';
import store from 'store';
import {ERROR} from '../const/errors';

class RegistrationContainer extends Component {
	state = {
		fullName: '',
		email: '',
		password: '',
	};
	handleChange = name => e => {
		this.setState({
			[name]: e.target.value
		});
	};
	validation = (user) => {
		let isValid = false;
		for (let key in user) {
			isValid = user[key] !== '' && user[key];
			if (!isValid) return;
		}
	};
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.validation(this.state) === false) return false;
		const {fullName, email, password} = this.state;
		const userData = {
			name: fullName,
			email: email,
			password: password
		};
		this.createUser(userData);
	};
	createUser = (data) => {
		this.props.setStatus({
			created: false,
			sending: true,
		});
		setTimeout(() => {
			api.post(API_REGISTER, data, (data) => {
				if (data.exist) {
					store.dispatch(infoShow(ERROR.USER_EXIST));
					this.props.setStatus({
						created: false,
						sending: false,
					});
				} else if (data.success) {
					this.props.setStatus({
						created: true,
						sending: false,
					});
				} else {
					this.props.setStatus({
						created: false,
						sending: false,
					});
				}
			});
		}, 400);
	};

	render() {
		return (
			<div className='reg-form-container'>
				<Form param={registrationFormConfig} values={this.state} onSubmit={this.handleSubmit}
					  onChange={this.handleChange}/>
			</div>
		);
	}
}

export default RegistrationContainer;

const registrationFormConfig = {
	fields: [
		{
			name: 'fullName',
			placeholder: FIELD.PLACEHOLDER.NAME,
			type: FIELD.TYPE.TEXT,
			value: '',
			max: 100,
			min: 2,
			required: true,
			validation: true,
		}
		, {
			name: 'email',
			placeholder: FIELD.PLACEHOLDER.EMAIL,
			type: FIELD.TYPE.EMAIL,
			value: '',
			required: true,
			validation: true,
		}
		, {
			name: 'password',
			placeholder: FIELD.PLACEHOLDER.PASSWORD,
			type: FIELD.TYPE.PASSWORD,
			value: '',
			max: 20,
			min: 5,
			confirm: true,
			required: true,
			validation: true,
		},
	]
};

