import {
	GET_PRODUCT_DETAILS,
	CONVERT_CURRENCY,
	SELECT_PRODUCT,
	SELECT_ALL,
	DELETE_PRODUCT,
	DELETE_PRODUCT_SELECTED,
} from '../actions/types';
import ShoppingCartItems, {
	currencyConverterMapping,
	currencyDispayMapping,
} from '../components/Globals';

const initalState = {
	...ShoppingCartItems,
	totalProducts: 4,
	cartCost: 4000,
	currencyType: 'D',
	currencyDisplay: '$',
};

const deleteSelectedProduct = (state) => {
	let productDetails = { ...state.products };
	let cartUpdatedCost = state.cartCost;
	Object.keys(productDetails).forEach((items) => {
		if (productDetails[items].isSelected) {
			productDetails[items].isSelected = false;
			productDetails[items].inCart = false;
			cartUpdatedCost -= productDetails[items].price;
		}
	});
	return {
		...state,
		cartCost: Math.round((cartUpdatedCost + Number.EPSILON) * 100) / 100,
		products: productDetails,
	};
};

const deleteProduct = (state, action) => {
	let productDetails = { ...state.products };
	productDetails[action.payload.productName].isSelected = false;
	productDetails[action.payload.productName].inCart = false;

	return {
		...state,
		cartCost:
			Math.round(
				(state.cartCost -
					productDetails[action.payload.productName].price +
					Number.EPSILON) *
					100
			) / 100,
		products: {
			...state.products,
			[action.payload.productName]: productDetails[action.payload.productName],
		},
	};
};

const selectAll = (state, action) => {
	let productDetails = { ...state.products };
	Object.keys(productDetails).forEach((items) => {
		if (productDetails[items].inCart) {
			productDetails[items].isSelected = action.payload.selectAll;
		}
	});
	return {
		...state,
		products: productDetails,
	};
};

const selectProduct = (state, action) => {
	let productDetails = { ...state.products };
	productDetails[action.payload.productName].isSelected = !productDetails[
		action.payload.productName
	].isSelected;
	return {
		...state,
		products: {
			...state.products,
			[action.payload.productName]: productDetails[action.payload.productName],
		},
	};
};

const covertCurrency = (state, action) => {
	let productDetails = { ...state };
	let totalCost = 0;
	let toConvert =
		currencyConverterMapping[productDetails.currencyType][
			action.payload.currency
		];
	let currencyDisplay = currencyDispayMapping[action.payload.currency];
	Object.keys(productDetails.products).forEach((items) => {
		if (productDetails.products[items].inCart) {
			productDetails.products[items].price =
				Math.round(
					(productDetails.products[items].price * toConvert + Number.EPSILON) *
						100
				) / 100;
			totalCost += productDetails.products[items].price;
		}
	});
	return {
		...state,
		currencyType: action.payload.currency,
		currencyDisplay: currencyDisplay,
		products: productDetails.products,
		cartCost: totalCost,
	};
};

export default (state = initalState, action) => {
	switch (action.type) {
		case GET_PRODUCT_DETAILS:
			return {
				...state,
			};
		case DELETE_PRODUCT_SELECTED:
			return deleteSelectedProduct(state);
		case DELETE_PRODUCT:
			return deleteProduct(state, action);
		case SELECT_ALL:
			return selectAll(state, action);
		case SELECT_PRODUCT:
			return selectProduct(state, action);
		case CONVERT_CURRENCY:
			return covertCurrency(state, action);
		default:
			return state;
	}
};
