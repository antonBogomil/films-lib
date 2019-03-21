import {connect} from 'react-redux';
import Menu from '../components/elements/menu/Menu';
import {hideModal, showModal} from '../redux/actions/modal';
import {withRouter} from 'react-router-dom';
import {login, logout} from '../redux/actions/auth';
import React, {Component} from 'react';
import {getUserFromStorage} from "../helpers";

class MenuContainer extends Component {
    componentDidMount() {
        const user = getUserFromStorage();
        if (user) {
            this.props.login(user);
        }
    }

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
    login: (user) => {
        dispatch(login(user))
    }
});
const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuContainer));