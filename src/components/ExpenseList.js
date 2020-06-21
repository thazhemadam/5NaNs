import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/visibleExpenses'
//Regular unconnected component
const ExpenseList = (props) => (
    <div>
        <h1>Expense List!</h1>
        {props.expenses.map((expense)=> {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
);

//Function to map state and props
const mapStateToProps = (state)=> {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

//Connect to Redux Store
export default connect(mapStateToProps)(ExpenseList);
