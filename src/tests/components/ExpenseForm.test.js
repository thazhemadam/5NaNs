import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from  '../../components/ExpenseForm';
import testExpenses from '../fixtures/expenses';

test('Render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExpenseForm with fixture expense data #1', () => {
    const wrapper = shallow(<ExpenseForm expense={testExpenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExpenseForm with fixture expense data #2', () => {
    const wrapper = shallow(<ExpenseForm expense={testExpenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExpenseForm with fixture expense data #3', () => {
    const wrapper = shallow(<ExpenseForm expense={testExpenses[2]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    // Pass a dummy preventDefault funciton as argument, to be used in the onSubmit function.
    // Else, an error is thrown.
    wrapper.find('form').simulate('submit', {preventDefault: ()=>{}});
    // Check the state for the component
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Set description on input change', ()=> {
    const value = 'Test Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('Set note on textarea change', ()=>{
    const value = 'Test Note Value';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('Set amount on amount change', ()=>{
    const amount = '420.69';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at('1').simulate('change', {
        target: {value:amount}
    })
    expect(wrapper.state('amount')).toBe(amount);
});

test('Do not set amount on invalid amount change', ()=>{
    const amount = '123.321';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at('1').simulate('change', {
        target: {value:amount}
    });
    expect(wrapper.state('amount')).toBe('');
});
