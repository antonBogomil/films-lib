import React, {Component} from 'react';
import './modal.scss';
import ReactDOM from 'react-dom';
import * as T from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
	element = document.createElement('div');

	componentDidMount() {
		modalRoot.appendChild(this.element);
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.element);
	}

	onClickOutside = (e)=>{
		e.preventDefault();
		if(e.target === e.currentTarget) {
			this.props.onClose()
		}
	};

	render() {
		const {children, onClose} = this.props;
		return ReactDOM.createPortal(
			<div className='modal-dialog' onClick={this.onClickOutside}>
				<div className='modal-btn-container'>
					<div onClick={onClose} className='modal-btn-close'/>
				</div>
				<div className='modal-dialog-inner'>
					{children}
				</div>
			</div>
			, this.element
		);
	}
}

Modal.propTypes = {
	children: T.object.isRequired,
	onClose: T.func.isRequired,
};
export default Modal;