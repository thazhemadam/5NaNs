//ExpenseListFilters will help display the expenses in accordance with the filters, and sorting parameters provided.
import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  sortAsc,
  sortDesc,
  setStartDate,
  setEndDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocus: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocus) => {
    this.setState(() => ({ calendarFocus }));
  };

  onTextChange = (e) => {
    // Everytime the text-value in the input field changes, filter.text in state is changed to the new value.
    // Thus, automatically, the new values are rendered.
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    // Everytime the Sort-By drop down is used and the setting is changed, it is first checked if the new value is data, or amount.
    // Depending upon this, the filter.sortBy attribute is changed.
    e.target.value === "date"
      ? this.props.sortByDate()
      : this.props.sortByAmount();
  };

  onSortOrderToggle = (e) => {
    //Click on the button to change order from ascending to descending, and vice versa.
    if (this.props.filters.sortOrder === "asc") {
      this.props.sortDesc();
    } else if (this.props.filters.sortOrder === "desc") {
      this.props.sortAsc();
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
            <button className="input-group__item-order" onClick={this.onSortOrderToggle}>
              {this.props.filters.sortOrder === "asc" ? "⬆" : "⬇"}
            </button>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDateId="0"
              endDateId="1"
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocus}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              showClearDates={true}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  sortAsc: () => dispatch(sortAsc()),
  sortDesc: () => dispatch(sortDesc()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
