import {connect} from 'react-redux';
import Menu from '../components/elements/menu/Menu';
import {hideModal, showModal} from '../redux/actions/modal';
import {withRouter} from 'react-router-dom';
import {logout} from '../redux/actions/auth';

const mapDispatchToProps = dispatch => ({
	hideModal: () => dispatch(hideModal()),
	showModal: (modalType) => {
		dispatch(showModal({modalType}));
	},
	logout: () => {
		dispatch(logout());
	}
});
const mapStateToProps = (state) => {
	return {
		user: state.auth.user
	};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));