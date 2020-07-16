import { SELECT_PRODUCT, SELECT_ALL } from './types';

export const selectProduct = (productName) => {
	return (dispatch) => {
		console.log('product select');
		dispatch({
			type: SELECT_PRODUCT,
			payload: {
				productName: productName,
			},
		});
	};
};

export const selectAll = (event) => {
	return (dispatch) => {
		console.log('product all select');
		console.log(event.target.checked);
		dispatch({
			type: SELECT_ALL,
			payload: {
				selectAll: event.target.checked,
			},
		});
	};
};
