import { CONVERT_CURRENCY } from './types';

export const convertCurrency = (currency) => {
	return (dispatch) => {
		console.log('corrency convert');
		dispatch({
			type: CONVERT_CURRENCY,
			payload: {
				currency: currency,
			},
		});
	};
};
