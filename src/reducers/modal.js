import {OPEN} from '../actions/modal';

const initialState = {
	open: false,
};
export default (state = initialState, action) => {
	switch (action.type) {
		case OPEN :
			return {
				open: action.payload.open
			};
		default:
			return state;
	}
};