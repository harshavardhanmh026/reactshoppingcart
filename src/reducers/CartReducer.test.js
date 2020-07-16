import { SELECT_PRODUCT } from '../actions/types';

import ShoppingCartItems from '../components/Globals';

import CartReducer from './CartReducer';

describe('Shopping cart reducer', () => {
	it('should expect inital state', () => {
		expect(CartReducer(undefined, {})).toEqual({
			...ShoppingCartItems,
			totalProducts: 4,
			cartCost: 4000,
			currencyType: 'D',
			currencyDisplay: '$',
		});
	});
});

describe('Shopping cart reducer', () => {
	it('should expect inital state', () => {
		expect(CartReducer(undefined, {})).toEqual({
			...ShoppingCartItems,
			totalProducts: 4,
			cartCost: 4000,
			currencyType: 'D',
			currencyDisplay: '$',
		});
	});

	it('should expect state updated with input cart item selected', () => {
		let productDetails = { ...ShoppingCartItems.products };
		productDetails['ABC'].isSelected = !productDetails['ABC'].isSelected;
		expect(
			CartReducer(
				{
					...ShoppingCartItems,
					totalProducts: 4,
					cartCost: 4000,
					currencyType: 'D',
					currencyDisplay: '$',
				},
				{
					type: SELECT_PRODUCT,
					payload: {
						productName: 'ABC',
					},
				}
			)
		).toEqual({
			products: productDetails,
			totalProducts: 4,
			cartCost: 4000,
			currencyType: 'D',
			currencyDisplay: '$',
		});
	});
});
