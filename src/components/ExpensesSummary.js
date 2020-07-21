import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import visibleExpenses from '../selectors/visibleExpenses';
import totalVisibleExpenses from '../selectors/totalVisibleExpenses';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord =  expenseCount === 1 ?'expense' : 'expenses';
    const formattedExpenseTotal = '₹'+numeral(expensesTotal).format('0,0.00');
    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span> {expenseCount} {expenseWord} </span> totalling <span> {formattedExpenseTotal} </span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/add"> Add Expense </Link> 
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpensesArray  = visibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpensesArray.length,
        expensesTotal: totalVisibleExpenses(visibleExpensesArray)
    };
};
export default connect(mapStateToProps)(ExpensesSummary);