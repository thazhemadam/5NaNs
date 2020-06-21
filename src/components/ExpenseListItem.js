//Export a stateless functional component for rendering description, amount, and createdAt.
import React from 'react';
import { connect } from 'react-redux';
import {removeExpense} from '../actions/expenses'

const ExpenseListItem = (props) => (
    <div>
        <h3>{props.description}</h3>
        <p>{props.amount} - {props.createdAt}</p>
        <button onClick = {(e)=> {
            props.dispatch(removeExpense(props))
        }}>Remove</button>
    </div>
);



export default connect()(ExpenseListItem);