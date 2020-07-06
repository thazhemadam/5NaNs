import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, sortAsc, sortDesc, setStartDate, setEndDate } from '../../src/actions/filters';

test('Generate action object - Set Text Filter ~ default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "UPDATE_TEXT",
        text: ''
    })
})

test('Generate action object - Set Text Filter ~ provided value', () => {
    const testText = 'Test for setTextFilter when a text value is provided.';
    const action = setTextFilter(testText);
    expect(action).toEqual({
        type:"UPDATE_TEXT",
        text: testText
    })
})


test('Generate action object - Sort By Amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
        
})

test('Generate action object - Sort By Date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
})

test('Generate action object - Sort Order Ascending', () => {
    const action = sortAsc();
    expect(action).toEqual({
        type: "SORT_ASCENDING"
    })
})

test('Generate action object - Sort Order Descending', () => {
    const action = sortDesc();
    expect(action).toEqual({
        type: "SORT_DESCENDING"
    })
})


test('Generate action object - Set Start Date ', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
})

test('Generate action object - Set End Date ', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    
    })
})
