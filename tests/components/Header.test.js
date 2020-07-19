import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../src/components/Header';


test('Render Header Component', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
}); 


test('Call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout = {startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});