import {connect} from 'react-redux';
import Content from '../components/content';
const mapStateToProps =(state)=> {
	console.log(state);
	return {
		modalOpen: state.modal.open
	}
};
export default connect(mapStateToProps)(Content)
