import Login from 'components/elements/login';
import {connect} from 'react-redux';
import {Component} from 'react';
import {login} from 'store/actions/auth';
import React from 'react';
import {DICTIONARY, FIELD} from '../const/Constants';
import Form from '../components/elements/form/Form';
import Button from '../components/elements/button';

class LoginContainer extends Component {
	state = {
		user: {
			email: '',
			password: ''
		},
		loading: false,
	};
	handleSubmit = e => {
		e.preventDefault();
		this.setState({
			...this.state,
			loading: true,
		});
		const {user: {email, password}} = this.state;
		this.props.login({email, password}, (data) => {
			this.setState({...this.state, loading: false});
		});
	};

	handleChange = name => e => {
		console.log(name);
		const value = e.currentTarget.value;
		this.setState(prev => ({
			...prev,
			user: {
				...prev.user,
				[name]: value,
			}
		}));
	};


	render() {
		const {loading, user} = this.state;
		return (<Login {...this.props}
					   loading={loading}
					   form={
						   <Form param={config}
								 values={user}
								 onSubmit={this.handleSubmit}
								 onChange={this.handleChange}
								 submitBtn={
									 <Button type={'submit'}>
										 {DICTIONARY.LOGIN}
									 </Button>
								 }
						   />
					   }/>);
	}
}

const config = {
	fields: [
		{
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

const mapStateToProps = (state) => {
	return {
		user: state.auth.user,
		error: state.auth.errorMessage,
	};
};
const mapDispatchToProps = dispatch => ({
	login: (params, cb) => {
		return dispatch(login(params, cb));
	},

});
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);