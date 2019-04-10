import {connect} from 'react-redux';
import Menu from "components/elements/menu/Menu";
import {hideModal, showModal} from 'store/actions/modal';
import {withRouter} from 'react-router-dom';
import {logout} from 'store/actions/auth';
import React, {Component} from 'react';

class MenuContainer extends Component {
    render() {
        return (
            <Menu {...this.props}/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal()),
    showModal: (modalType) => {
        dispatch(showModal({modalType}));
    },
    logout: () => {
        dispatch(logout());
    },
});
const mapStateToProps = (state) => {
    return {
		isAuth: state.auth.isAuth,
        user: state.auth.user
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuContainer));