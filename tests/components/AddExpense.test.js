import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../src/components/AddExpense';
import testExpenses from '../fixtures/expenses';


let startAddExpenseDispatchSpy, history, wrapper;

beforeEach(()=>{
    startAddExpenseDispatchSpy = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(<AddExpense startAddExpense={startAddExpenseDispatchSpy} history={history}/>);
});

test('Render AddExpense Page correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('Handle onSubmitDispatch correctly', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmitDispatch')(testExpenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpenseDispatchSpy).toHaveBeenLastCalledWith(testExpenses[1]);
});
