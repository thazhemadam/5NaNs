//Export a stateless functional component for rendering description, amount, and createdAt.
import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = (props) => (
    <div>
        <Link to = {`/edit/${props.id}`}>
            <h3>{props.description}</h3>
        </Link>
        <p>{props.amount} - {props.createdAt}</p>
        
    </div>
);



export default ExpenseListItem;