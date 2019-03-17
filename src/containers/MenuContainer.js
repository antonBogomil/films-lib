import {connect} from 'react-redux';
import Menu from '../components/elements/menu';
import open from '../actions/modal';

const mapDispatchToProps =(dispatch)=>({
	openModal: (isOpen) => {
		return dispatch(open(isOpen));
	},
});

function mapStateToProps(state) {
	return {
		open1: state.open
	}
}

export default (Menu);