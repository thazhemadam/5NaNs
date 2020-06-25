import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import testExpenses from '../fixtures/expenses';

test('Render ExpenseList with Expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={testExpenses}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Render ExpenseList with empty Expenses Array', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
})
