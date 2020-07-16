import { GET_PRODUCT_DETAILS } from './types';

export const getProductDetails = () => {
	return (dispatch) => {
		console.log('get product state');
		dispatch({
			type: GET_PRODUCT_DETAILS,
		});
	};
};
