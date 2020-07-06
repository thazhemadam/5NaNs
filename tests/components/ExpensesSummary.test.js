import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../src/components/ExpensesSummary';

test('Render ExpensesSummary with 1 Expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={69}/>)
    expect(wrapper).toMatchSnapshot();
})

test('Render ExpensesSummary with Multiple Expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={7} expensesTotal={420}/>)
    expect(wrapper).toMatchSnapshot();
})