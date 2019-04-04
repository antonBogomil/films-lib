import {connect} from 'react-redux';
import {infoHide} from 'store/actions/info';
import InfoBar from 'components/elements/info-bar/InfoBar';
import React from 'react';

const InfoContainer = ({type, infoHide, open,message}) => {
	return (
		<InfoBar type={type} open={open} message={message} onClose={infoHide}/>);
};

const mapStateToProps = ({info: {message, show, type}}) => {
	return {
		message: message,
		type: type,
		open: show
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		infoHide: () => {
			dispatch(infoHide());
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);