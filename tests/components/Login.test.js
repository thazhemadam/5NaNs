import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../src/components/Login';

test('Render Login Page', () => {
  const wrapper = shallow;
  expect(wrapper).toMatchSnapshot();
});