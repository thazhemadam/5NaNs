//Export a stateless functional component for rendering description, amount, and createdAt.
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => (
        <Link className="list-item" to = {`/edit/${props.id}`}>
            <div>
            <h3 className="list-item__title">{props.description}</h3>    
            <span className="list-item__date">{moment(props.createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            
            <h3 className="list-item__amount"> ₹{numeral(props.amount).format('0,0.00')} </h3>
            
        </Link>
);



export default ExpenseListItem;