import {infoActionTypes} from '../types';

const initialState = {
	message: null,
	type: null,
	show: false,
};

const infoReducer = (state = initialState, action) => {
	switch (action.type) {
		case infoActionTypes.INFO_SHOW:
			return {
				show: true,
				message: action.payload.message,
				type: action.payload.type
			};
		case infoActionTypes.INFO_HIDE:
			return {
				message: state.message,
				show: false,
			};
		default:
			return state;
	}
};
export default infoReducer;