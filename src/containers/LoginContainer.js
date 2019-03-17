import Login from 'components/elements/login';
import {connect} from 'react-redux';
import {logIn} from '../actions/auth';

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};
const mapDispatchToProps = dispatch => ({
	logIn: (params, cb) => {
		return dispatch(logIn(params, cb))
	},

});
export default connect(mapStateToProps, mapDispatchToProps)(Login);