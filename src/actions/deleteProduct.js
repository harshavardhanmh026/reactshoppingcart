import { DELETE_PRODUCT, DELETE_PRODUCT_SELECTED } from './types';

export const deleteProduct = (productName) => {
	return (dispatch) => {
		console.log('product delete');
		dispatch({
			type: DELETE_PRODUCT,
			payload: {
				productName: productName,
			},
		});
	};
};

export const deleteSelectedProduct = () => {
	return (dispatch) => {
		console.log('Dlete product all select');
		dispatch({
			type: DELETE_PRODUCT_SELECTED,
		});
	};
};
