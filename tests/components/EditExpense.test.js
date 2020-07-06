import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../src/components/EditExpense';
import testExpenses from '../fixtures/expenses';


let editExpense, removeExpense, history, wrapper;

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpense 
                        editExpense={editExpense} 
                        removeExpense={removeExpense} 
                        history={history} 
                        expense={testExpenses[2]}    
                    />);
});

test('Render Edit Expense Page correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('Handle editExpense correctly', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmitDispatch')(testExpenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(testExpenses[2].id, testExpenses[2]);
});


test('Handle removeExpense correctly', ()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id:testExpenses[2].id});
});
