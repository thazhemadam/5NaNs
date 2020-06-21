//ExpenseListFilters will help display the expenses in accordance with the filters, and sorting parameters provided.
import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate} from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
    
        <input type='text' value = {props.filters.text} onChange = {(e)=>{
            // Everytime the text-value in the input field changes, filter.text in state is changed to the new value. 
            // Thus, automatically, the new values are rendered.
            props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select value = {props.filters.sortBy} onChange = {(e)=>{
            // Everytime the Sort-By drop down is used and the setting is changed, it is first checked if the new value is data, or amount.
            // Depending upon this, the filter.sortBy attribute is changed.
            props.dispatch((e.target.value==='date'?sortByDate():sortByAmount()))
        }}>
            <option value = "date">Date</option>
            <option value = "amount">Amount</option> 
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }; 
}

export default connect(mapStateToProps)(ExpenseListFilters);