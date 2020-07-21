import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";

export class AddExpense extends React.Component {
	onSubmitDispatch = (newExpense) => {
		this.props.startAddExpense(newExpense);
		this.props.history.push("/");
	};
	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Add Expense</h1>
					</div>
				</div>
				<div className="content-container">
					<ExpenseForm onSubmitDispatch={this.onSubmitDispatch} />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startAddExpense: (newExpense) => dispatch(startAddExpense(newExpense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpense);
