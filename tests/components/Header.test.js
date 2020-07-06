import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header';


test('Render Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
}); 