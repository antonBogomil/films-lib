import React, {Component} from 'react';
import './info-bar.scss';
import ReactDOM from 'react-dom';
import * as T from 'prop-types';

const infoRoot = document.getElementById('infobar-root');

class InfoBar extends Component {
	element = document.createElement('div');

	componentDidMount() {
		infoRoot.appendChild(this.element);
	}

	onClickOutside = (e) => {
		e.preventDefault();
		if (e.target === e.currentTarget) {
			this.props.onClose();
		}
	};

	render() {
		const {message, onClose, open} = this.props;
		const clName = open ? 'info-bar show' : 'info-bar';
		return ReactDOM.createPortal(
			<div className={clName} onClick={this.onClickOutside}>

				<div className='info-dialog-inner'>
					<div className='info-btn-container'>
						<div onClick={onClose} className='info-btn-close'>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className='info-text'>{message}</div>
				</div>
			</div>
			, this.element
		);
	}
}

InfoBar.propTypes = {
	onClose: T.func.isRequired,
};
export default InfoBar;