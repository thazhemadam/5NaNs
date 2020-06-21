import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses'

const AddExpense = (props) => (
    <div>
        <h1>Add Expense Page</h1>
        <ExpenseForm onSubmitDispatch = {(newExpense) => {
            props.dispatch(addExpense(newExpense));
            props.history.push('/');
        }}/>
    </div>
);

export default connect()(AddExpense);