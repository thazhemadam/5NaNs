import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../src/components/EditExpense';
import testExpenses from '../fixtures/expenses';


let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(()=>{
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpense 
                        startEditExpense={startEditExpense} 
                        startRemoveExpense={startRemoveExpense} 
                        history={history} 
                        expense={testExpenses[2]}    
                    />);
});

test('Render Edit Expense Page correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('Handle startEditExpense correctly', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmitDispatch')(testExpenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(testExpenses[2].id, testExpenses[2]);
});


test('Handle startRemoveExpense correctly', ()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:testExpenses[2].id});
});
