import {infoActionTypes} from '../types';

export const infoShow = (message, type) => {
	return (dispatch) => {
		dispatch({
			type: infoActionTypes.INFO_SHOW,
			payload: {
				message: message,
				type: type
			}
		});
	};
};
export const infoHide = (timer) => {
	return (dispatch) => {
		dispatch({
			type: infoActionTypes.INFO_HIDE,
		});
	};
};