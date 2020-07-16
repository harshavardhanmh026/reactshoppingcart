import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Pay } from './Pay';

configure({ adapter: new Adapter() });

describe('<Pay />', () => {
	let wrapper;
	const props = { cartProps: { cartCost: 0 } };
	beforeEach(() => {
		wrapper = shallow(<Pay {...props} />);
	});

	it('pay buttom to be disabled', () => {
		expect(wrapper.find('button')).toHaveLength(0);
	});

	it('pay buttom to be enabled', () => {
		wrapper.setProps({ cartProps: { cartCost: 1000 } });
		expect(wrapper.find('button')).toHaveLength(1);
	});
});
