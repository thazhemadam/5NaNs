import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import visibleExpenses from '../selectors/visibleExpenses';
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
        //The expenses property returned as a prop will be rendered as a HOC that renders ExpenseList.
        //This DOES NOT change the original state/store. Only the required parameters passed as props will be changed.
        expenses: visibleExpenses(state.expenses, state.filters)
    }
}

//Connect to Redux Store
export default connect(mapStateToProps)(ExpenseList);
