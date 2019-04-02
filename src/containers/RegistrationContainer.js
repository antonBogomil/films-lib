import {FIELD} from '../const';
import React, {Component} from 'react';
import Form from '../components/elements/form';
import {api} from 'api';

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
		if (this.validation(this.state)===false) return false;
		this.props.setSending(true);
		const {fullName, email, password} = this.state;
		const userData = {
			name: fullName,
			email: email,
			password: password
		};
		api.createUser(userData,(success)=>{
			this.props.setSending(false);
		});
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

