import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddExpense';
import testExpenses from '../fixtures/expenses';


let addExpenseDispatchSpy, history, wrapper;

beforeEach(()=>{
    addExpenseDispatchSpy = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(<AddExpense addExpense={addExpenseDispatchSpy} history={history}/>);
});

test('Render AddExpense Page correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('Handle onSubmitDispatch correctly', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmitDispatch')(testExpenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpenseDispatchSpy).toHaveBeenLastCalledWith(testExpenses[1]);
});
