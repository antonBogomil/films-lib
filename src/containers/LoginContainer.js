import Login from 'components/elements/login';
import {connect} from 'react-redux';
import {Component} from 'react';
import {login} from '../redux/actions/auth';
import {getUserFromStorage} from "../helpers";
import React from "react";

class LoginContainer extends Component {
    componentDidMount() {

    }
    render() {
        return (<Login {...this.props}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        error: state.auth.errorMessage
    };
};
const mapDispatchToProps = dispatch => ({
    login: (params) => {
        return dispatch(login(params))
    },

});
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);