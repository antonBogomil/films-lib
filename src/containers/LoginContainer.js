import Login from 'components/elements/login';
import {connect} from 'react-redux';
import {login} from '../redux/actions/auth';

const mapStateToProps = (state) => {
	return {
		user: state.auth.user,
		error: state.auth.errorMessage
	};
};
const mapDispatchToProps = dispatch => ({
	login: (params, cb) => {
		return dispatch(login(params, cb))
	},

});
export default connect(mapStateToProps, mapDispatchToProps)(Login);