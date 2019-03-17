import React, {Component} from 'react';
import './modal.scss';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('modal-root');
class Modal extends Component {
	element = document.createElement('div');

	componentDidMount() {
		modalRoot.appendChild(this.element);
	}
	componentWillUnmount() {
		modalRoot.removeChild(this.element)
	}
	render() {
		const {children,onClose} = this.props;
		return ReactDOM.createPortal(
			<div className='modal-dialog'>
				{children}
			</div>
			, this.element
		);
	}
}

export default Modal;