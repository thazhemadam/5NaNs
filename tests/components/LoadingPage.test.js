import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../src/components/LoadingPage';

test('Render LoadingPage correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});