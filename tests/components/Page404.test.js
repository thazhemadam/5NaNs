import React from 'react';
import { shallow } from 'enzyme';
import Page404 from '../../src/components/Page404';

test('Render Page404 Component', () => {
    const wrapper = shallow(<Page404 />);
    expect(wrapper).toMatchSnapshot();
})