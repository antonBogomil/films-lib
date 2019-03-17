export const OPEN = 'OPEN';
export default (isOpen) => {
	return dispatch => {
		dispatch({
			type: OPEN,
			payload: {
				open: isOpen
			}
		});
	};
};

