import Modal from 'components/elements/modal/Modal';
import {connect} from 'react-redux';
// import LoginContainer from './LoginContainer';
import React from 'react';
import {hideModal} from 'store/actions/modal';

const modalBody = (modalType) => {
	switch (modalType) {
		case 'CONTACT':
			return <h5>This is contact form</h5>;
		default:
			return <span>EMPTY modal</span>;
	}
};
const ModalContainer = (props) => {
	const {modalType, hideModal,modalOpen} = props;
	if (modalOpen){
		return (
			<Modal onClose={hideModal}>
				{modalBody(modalType)}
			</Modal>
		);
	}
	else {
		return null
	}
};
const mapStateToProps = (state) => {
	return {
		modalType: state.modal.type,
		modalOpen: state.modal.open
	};
};
const mapDispatchToProps = (dispatch) => {
	return{
		hideModal: () => {
			dispatch(hideModal())
		}
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);