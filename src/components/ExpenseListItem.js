//Export a stateless functional component for rendering description, amount, and createdAt.
import React from 'react';


const ExpenseListItem = ({description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;