import moment from 'moment';
import filtersReducer from '../../src/reducers/filters';

let defaultTestState = {
    text:'',
    sortBy:'date',
    sortOrder: 'desc',
    startDate:moment().startOf('month'),
    endDate: moment().endOf('month')
}

test('Setup default values for filter property in redux-store.', () => {
    const testState = filtersReducer(undefined, {type:"@@INIT"});
    expect(testState).toEqual(defaultTestState);
});

test('Set sortBy to Amount', () => {
    const testAction = {type: "SORT_BY_AMOUNT"};
    const testState = filtersReducer(defaultTestState, testAction);
    expect(testState).toEqual({
        ...defaultTestState,
        sortBy: 'amount'
    });
    defaultTestState = testState;
})

test('Set sortBy to Date', () => {
    const testAction = {type: "SORT_BY_DATE"};
    const testState = filtersReducer(defaultTestState, testAction);
    expect(testState).toEqual({
        ...defaultTestState,
        sortBy: 'date'
    });
    defaultTestState = testState;
})

test('Set sortOrder to Ascending', ()=>{
    const testAction = {type: "SORT_ASCENDING"};
    const testState = filtersReducer(defaultTestState, testAction);
    expect(testState).toEqual({
        ...defaultTestState,
        sortOrder: 'asc'
    });
    defaultTestState = testState;
})

test('Set sortOrder to Descending', ()=>{
    const testAction = {type: "SORT_DESCENDING"};
    const testState = filtersReducer(defaultTestState, testAction);
    expect(testState).toEqual({
        ...defaultTestState,
        sortOrder: 'desc'
    });
    defaultTestState = testState;
})

test('Set text filter', ()=>{
    const text = 'Testing reducer for the UPDATE_TEXT action.';
    const testAction = {
                            type: "UPDATE_TEXT",
                            text
                        }; 
    const testState = filtersReducer(defaultTestState, testAction);
    expect(testState).toEqual({
        ...defaultTestState,
        text
    });
})

test('Set start date filter', ()=>{
    
    const testAction = {
                            type: "SET_START_DATE",
                            startDate: moment(1000)
                        }; 
    const testState = filtersReducer(defaultTestState, testAction);
    expect(testState).toEqual({
        ...defaultTestState,
        startDate: moment(1000)
    });
})

test('Set end date filter', ()=>{
    
    const testAction = {
                            type: "SET_END_DATE",
                            endDate: moment(-1000)
                        }; 
    const testState = filtersReducer(defaultTestState, testAction);
    expect(testState).toEqual({
        ...defaultTestState,
        endDate: moment(-1000)
    });
})