// Component for the Form which will be used in AddExpense and EditExpense.
import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import { Link } from 'react-router-dom';

export default class ExpenseForm extends React.Component {
	//Local Component State of .
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : "",
			note: props.expense ? props.expense.note : "",
			amount: props.expense ? props.expense.amount.toString() : "",
			createdAt: props.expense
				? moment(props.expense.createdAt)
				: moment(),
			calendarFocus: false,
			error: "",
		};
	}

	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	};

	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};

	onAmountChange = (e) => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};

	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocus: focused }));
	};

	onSubmitExpenseForm = (e) => {
		e.preventDefault();
		if (!this.state.description) {
			this.setState(() => ({ error: "Please enter description." }));
		} else if (!this.state.amount) {
			this.setState(() => ({ error: "Please enter amount." }));
		} else {
			this.setState(() => ({ error: "" }));
			//this.props.onSubmitDispatch refers to the function that is supposedly passed as a prop to the ExpenseForm component; which will be used to dispatch an action.
			this.props.onSubmitDispatch({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10),
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note,
			});
		}
	};

	render() {
		return (
			<form className="expense-form" onSubmit={this.onSubmitExpenseForm}>
				{this.state.error && (
					<p className="expense-form__error">{this.state.error}</p>
				)}
				<input
					className="text-input"
					type="text"
					placeholder="Description"
					autoFocus
					value={this.state.description}
					onChange={this.onDescriptionChange}
				/>

				<div className="expense-form__items">
					<input
						className="text-input"
						type="text"
						placeholder="₹ Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocus}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
				</div>
				<textarea
					className="textarea"
					placeholder="Add a note to help you remember where your money was spent!"
					value={this.state.note}
					onChange={this.onNoteChange}
				/>

				<div>
					<button className="button" style={{background:"#05a821"}}>Save Expense</button>
					<Link className="button" to="/dashboard" style={{background:"red"}}>Cancel</Link>
				</div>
			</form>
		);
	}
}
