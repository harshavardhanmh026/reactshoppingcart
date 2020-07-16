import React from 'react';
import ProductList from './ProductList';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';

configure({ adapter: new Adapter() });

describe('<ProductList />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Home />);
	});

	it('should have 1 ProductList Component', () => {
		expect(wrapper.find(ProductList)).toHaveLength(1);
	});
});
