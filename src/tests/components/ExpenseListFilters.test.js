import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { defaultFilters, testFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, sortAsc, sortDesc, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn(); 
    sortByDate = jest.fn(); 
    sortByAmount = jest.fn(); 
    sortAsc = jest.fn(); 
    sortDesc = jest.fn(); 
    setStartDate = jest.fn(); 
    setEndDate = jest.fn(); 
    wrapper = shallow(
        <ExpenseListFilters 
            filters = { defaultFilters }
            setTextFilter = { setTextFilter }
            sortByDate = { sortByDate }
            sortByAmount = { sortByAmount }
            sortAsc = { sortAsc }
            sortDesc = { sortDesc }
            setStartDate = { setStartDate }
            setEndDate = { setEndDate }
        />);
});

test('Render ExpenseListFilters with defaultFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Render ExpenseListFilters with defaultFilters', () => {
    wrapper.setProps({
        filters: testFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('Handle text change', () => {
    const value = 'test';
    wrapper.find('input').simulate('change',{ target: { value } });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('Sort by Amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', { target: {value} } );
    expect(sortByAmount).toHaveBeenCalled();
});

test('Sort by Date' , () => {
    const value = 'date';
    wrapper.setProps({
        filters: testFilters
    });
    wrapper.find('select').simulate('change', { target: {value} } );
    expect(sortByDate).toHaveBeenCalled();
});

test('Sort Ascending Order', () => {
    const value = 'asc';
    wrapper.find('button').simulate('click', { target: {value} } );
    expect(sortAsc).toHaveBeenCalled();
});

test('Sort Descending Order', () => {
    const value = 'desc';
    wrapper.setProps({
        filters: testFilters
    });
    wrapper.find('button').simulate('click', { target: {value} } );
    expect(sortDesc).toHaveBeenCalled();    
});

test('Handle date change', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')( {startDate, endDate} );
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Handle date focus change', () => {
    const calendarFocus = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocus);
    expect(wrapper.state('calendarFocus')).toBe(calendarFocus);
});
