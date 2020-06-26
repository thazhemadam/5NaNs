import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses'

export class AddExpense extends React.Component {
    onSubmitDispatch = (newExpense) => {
        this.props.addExpense(newExpense);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <h1>Add Expense Page</h1>
                <ExpenseForm onSubmitDispatch = {this.onSubmitDispatch}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
        addExpense: (newExpense) => dispatch(addExpense(newExpense))   
})

export default connect(undefined, mapDispatchToProps)(AddExpense);