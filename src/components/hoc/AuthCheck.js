import React, {Component} from 'react';
import {connect} from 'react-redux';
import Preloader from '../elements/preloader';
export default (ComposedComponent, reload, isAdminRoute = null) => {
	class AuthCheck extends Component {
		state = {
			loading: false,
		};
		render() {
			if (this.state.loading){
				return (
					<Preloader/>
				)
			}
			else if (isAdminRoute) {
				if(isAdminRoute && this.props.user.isAdmin){
					return (
						<h2>Admin page</h2>
					)
				}
				else {
					return (<h2>Forbidden</h2>)
				}
			}
			else {
				return <ComposedComponent/>
			}
		}
	}

	const mapStateToProps = (state) => {
		return {
			user: state.auth.user
		};
	};
	return connect(mapStateToProps)(AuthCheck);
}
