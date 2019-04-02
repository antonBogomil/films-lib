import {Component} from 'react';
import {connect} from 'react-redux';

class SecureContainer extends Component {
	render() {
		const {isAuth,privateComponent,publicComponent} = this.props;
		if (isAuth){
			return (privateComponent)
		}
		else {
			return (publicComponent)
		}
	}
}
const mapStateToProps = (state)=>{
	return {
		isAuth: state.auth.isAuth
	}
};
const mapDispatchToProps = dispatch =>{
	return {

	}
};
export default connect(mapStateToProps,mapDispatchToProps)(SecureContainer);