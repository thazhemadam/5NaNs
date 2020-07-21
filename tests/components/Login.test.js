import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../src/components/Login';

test('Render Login Component', () => {
  const wrapper = shallow;
  expect(wrapper).toMatchSnapshot();
});

test('Call startLogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<Login startLogin={startLogin}/>);
  wrapper.find('.google-btn').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});