import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import visibleExpenses from "../selectors/visibleExpenses";
//Regular unconnected component
export const ExpenseList = (props) => (
	<div className="content-container">
		<div className="list-header">
			<div className="show-for-mobile"> Expenses </div>
			<div className="show-for-desktop"> Expenses </div>
			<div className="show-for-desktop"> Amount </div>
		</div>
        <div className="list-body">
		{props.expenses.length === 0 ? (
			<div className="list-item list-item--message">
                <span>No expenses yet! </span>
            </div>
		) : (
			props.expenses.map((expense) => {
				return <ExpenseListItem key={expense.id} {...expense} />;
			})
		)}
        </div>
	</div>
);

//Function to map state and props
const mapStateToProps = (state) => {
	return {
		//The expenses property returned as a prop will be rendered as a HOC that renders ExpenseList.
		//This DOES NOT change the original state/store. Only the required parameters passed as props will be changed.
		expenses: visibleExpenses(state.expenses, state.filters),
	};
};

//Connect to Redux Store
export default connect(mapStateToProps)(ExpenseList);
