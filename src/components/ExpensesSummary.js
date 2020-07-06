import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import visibleExpenses from '../selectors/visibleExpenses';
import totalVisibleExpenses from '../selectors/totalVisibleExpenses';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord =  expenseCount === 1 ?'expense' : 'expenses';
    const formattedExpenseTotal = '₹'+numeral(expensesTotal).format('0,0.00');
    return(
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
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