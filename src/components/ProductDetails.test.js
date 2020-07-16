import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Productdetails } from './Productdetails';

configure({ adapter: new Adapter() });

const checkTableContents = (props, wrapper) => {
	let cartItems = [];
	Object.keys(props.cartProps.products).forEach((items) => {
		cartItems.push(props.cartProps.products[items]);
	});

	cartItems = cartItems.filter((item) => item.isSelected);
	const tbody = wrapper.find('tbody');
	expect(tbody).toHaveLength(1);
	const rows = tbody.find('tr');
	expect(rows).toHaveLength(cartItems.length);
	rows.forEach((tr, rowIndex) => {
		const cells = tr.find('td');
		expect(cells).toHaveLength(2);
		expect(cells.at(0).text()).toEqual(cartItems[rowIndex].name);
		expect(cells.at(1).text()).toEqual(cartItems[rowIndex].price.toString());
	});
};

describe('<Productdetails />', () => {
	let wrapper;
	const props = {
		cartProps: {
			products: {
				ABC: {
					name: 'ABC',
					price: 1000,
					inCart: true,
					isSelected: true,
				},
				BCD: {
					name: 'BCD',
					price: 1000,
					inCart: true,
					isSelected: true,
				},
			},
		},
	};
	beforeEach(() => {
		wrapper = mount(<Productdetails {...props} />);
	});

	it('check if all products in cart are selected', () => {
		checkTableContents(props, wrapper);
	});

	it('check if product in cart with only 1 product selected', () => {
		let newProps = {
			...props,
			cartProps: {
				...props.cartProps,
				products: {
					...props.cartProps.products,
					ABC: {
						...props.cartProps.products.ABC,
						isSelected: false,
					},
				},
			},
		};
		wrapper.setProps(newProps);
		checkTableContents(newProps, wrapper);
	});

	it('check if none of the products in cart are selected', () => {
		let newProps = {
			...props,
			cartProps: {
				...props.cartProps,
				products: {
					...props.cartProps.products,
					ABC: {
						...props.cartProps.products.ABC,
						isSelected: false,
					},
					BCD: {
						...props.cartProps.products.ABC,
						isSelected: false,
					},
				},
			},
		};
		wrapper.setProps(newProps);
		checkTableContents(newProps, wrapper);
	});
});
