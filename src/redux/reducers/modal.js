import {HIDE_MODAL, SHOW_MODAL} from '../actions/modal';

const initialState = {
	type: null,
	open: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MODAL:
			return {
				type: action.payload.modalType,
				open: true
			};
		case HIDE_MODAL:
			return initialState;
		default:
			return state;
	}
}