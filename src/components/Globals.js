const ShoppingCartItems = {
	products: {
		ABC: {
			name: 'ABC',
			price: 1000,
			inCart: true,
			isSelected: false,
		},
		BCD: {
			name: 'BCD',
			price: 1000,
			inCart: true,
			isSelected: false,
		},
		CDF: {
			name: 'CDF',
			price: 1000,
			inCart: true,
			isSelected: false,
		},
		DFE: {
			name: 'DFE',
			price: 1000,
			inCart: true,
			isSelected: false,
		},
	},
};
export default ShoppingCartItems;

const currencyConverterMapping = {
	D: {
		R: 75.19,
		S: 3.44,
		D: 1,
	},
	R: {
		D: 0.013,
		S: 0.046,
		R: 1,
	},
	S: {
		D: 0.29,
		R: 21.84,
		S: 1,
	},
};

const currencyDispayMapping = {
	D: '$',
	R: '₹',
	S: '₪',
};

export { currencyConverterMapping, currencyDispayMapping };
