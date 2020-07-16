import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ProductList } from './ProductList';

configure({ adapter: new Adapter() });

describe('<ProductList />', () => {
	let wrapper;
	const props = {
		cartProps: {
			products: {
				ABC: {
					name: 'ABC',
					price: 1000,
					inCart: true,
					isSelected: false,
				},
			},
		},
	};
	beforeEach(() => {
		wrapper = mount(<ProductList {...props} />);
	});

	it('check if the checkbox is unchecked', () => {
		expect(wrapper.find('#ABC')).toHaveLength(1);
	});

	it('check if the product checkbox is enabled', () => {
		wrapper.setProps({
			...props,
			cartProps: {
				...props.cartProps,
				products: {
					...props.cartProps.products,
					ABC: {
						...props.cartProps.products.ABC,
						isSelected: true,
					},
				},
			},
		});
		expect(wrapper.find('input[id="ABC"][checked=true]')).toHaveLength(1);
	});

	it('check if the product removed from the cart', () => {
		wrapper.setProps({
			...props,
			cartProps: {
				...props.cartProps,
				products: {
					...props.cartProps.products,
					ABC: {
						...props.cartProps.products.ABC,
						inCart: false,
					},
				},
			},
		});
		expect(wrapper.find('#ABC')).toHaveLength(0);
	});
});
