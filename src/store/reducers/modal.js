import {HIDE_MODAL, SHOW_MODAL} from '../actions/modal';
/*Test state  need to reset!!!! type:null , open: false*/
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