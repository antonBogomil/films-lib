import {DICTIONARY, FIELD} from '../const/Constants';
import React, {Component} from 'react';
import Form from '../components/elements/form';
import {api} from 'api';
import {API_REGISTER, ERROR} from 'const/Constants';
import {infoShow} from '../store/actions/info';
import store from 'store';
import Button from '../components/elements/button/Button';
import Preloader from '../components/elements/preloader';

class RegistrationContainer extends Component {
	state = {
		user: {
			fullName: '',
			email: '',
			password: '',
		},
		loading: false
	};
	handleChange = name => e => {
		this.setState({
			...this.state,
			user: {
				...this.state.user,
				[name]: e.target.value
			}
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
		if (this.validation(this.state.user) === false) return false;
		const {user: {fullName, email, password}} = this.state;
		const userData = {
			name: fullName,
			email: email,
			password: password
		};
		this.createUser(userData);
	};
	createUser = (data) => {
		this.setState({
			...this.state,
			loading: true
		});
		setTimeout(() => {
			api.post(API_REGISTER, data, (data) => {
				if (data && data.success) {
					this.props.setStatus({
						created: true
					});
				}
				this.setState({
					...this.state,
					loading: false
				});
			});
		}, 400);
	};

	render() {
		const {loading} = this.state;
		return (
			<div className='reg-form-container'>
				{loading ? <Preloader size='l'/> :
					<Form param={registrationFormConfig} values={this.state.user} onSubmit={this.handleSubmit}
						  onChange={this.handleChange} submitBtn={
						<Button type={'submit'}>
							{DICTIONARY.SEND}
						</Button>
					}/>}

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

