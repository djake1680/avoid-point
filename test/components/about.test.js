import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import About from '../../build/client/src/components/about/about';

describe('<About />', () => {

	const wrapper = shallow(<About />);

	it('should render a paragraph', () => {
		expect(wrapper.find('p').text()).toEqual("Hi! I'm React in a Box, an isomporhic React boilerplate utilizing a Node/Express server, Redux, React Router v4 and Webpack.");

	})

	it('should have a div container', () => {
		expect(wrapper.find('div').exists()).toEqual(true);
	})

})

