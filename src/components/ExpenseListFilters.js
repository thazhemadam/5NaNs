//ExpenseListFilters will help display the expenses in accordance with the filters, and sorting parameters provided.
import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, sortAsc, sortDesc, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocus: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocus) => {
        this.setState(() => ({ calendarFocus }))
    }

    render(){
        return (
            <div>
            
                <input type='text' value = {this.props.filters.text} onChange = {(e)=>{
                    // Everytime the text-value in the input field changes, filter.text in state is changed to the new value. 
                    // Thus, automatically, the new values are rendered.
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select value = {this.props.filters.sortBy} onChange = {(e)=>{
                    // Everytime the Sort-By drop down is used and the setting is changed, it is first checked if the new value is data, or amount.
                    // Depending upon this, the filter.sortBy attribute is changed.
                    this.props.dispatch((e.target.value==='date'?sortByDate():sortByAmount()))
                }}>
                    <option value = "date">Date</option>
                    <option value = "amount">Amount</option> 
                </select>
                <button onClick={(e) => {
                    //Click on the button to change order from ascending to descending, and vice versa.
                    if(this.props.filters.sortOrder ==='asc'){   
                        this.props.dispatch(sortDesc())
                    }
                    else if(this.props.filters.sortOrder === 'desc'){
                        this.props.dispatch(sortAsc())
                    }
                    
                }}>
                   {this.props.filters.sortOrder==='asc'?'⬆':'⬇'}
                </button>
                <DateRangePicker 
                    startDateId = "0"
                    endDateId = "1" 
                    startDate = {this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calendarFocus}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths = {1}
                    showClearDates = {true}
                    isOutsideRange = {()=> false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }; 
}

export default connect(mapStateToProps)(ExpenseListFilters);