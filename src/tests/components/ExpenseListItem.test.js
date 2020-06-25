import React from 'react';
import { shallow } from 'enzyme';
import testExpenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('Render ExpenseListItem with fixture expense #1', () => {
    const wrapper = shallow(<ExpenseListItem {...testExpenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Render ExpenseListItem with fixture expense #2', () => {
    const wrapper = shallow(<ExpenseListItem {...testExpenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Render ExpenseListItem with fixture expense #3', () => {
    const wrapper = shallow(<ExpenseListItem {...testExpenses[2]}/>);
    expect(wrapper).toMatchSnapshot();
})


