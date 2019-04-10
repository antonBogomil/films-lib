import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List} from '../components/pages/list/List';
import {connect} from 'react-redux';
import {api} from '../api';
import {API_GET_FILMS} from '../const/Constants';

class ListContainer extends Component {
	state = {
		data : []
	};
	componentDidMount() {
		api.get(API_GET_FILMS, (data) => {
			this.setState({
				data
			})
		});
	}

	render() {
		return (
			<List data={this.state.data}/>
		);
	}
}

const mapStateToProps = state => {

};
const mapDispatchToProps = dispatch => {

};
ListContainer.propTypes = {};

export default ListContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);