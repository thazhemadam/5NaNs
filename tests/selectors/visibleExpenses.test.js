import moment from 'moment';
import visibleExpenses from  '../../src/selectors/visibleExpenses';
import testExpenses from '../fixtures/expenses'

const standardTestFilters = {
    text: "",
    sortBy: 'date',
    sortOrder:'desc',
    startDate: undefined,
    endDate: undefined
};

test('Filter - Text Value', () => {
    const testFilters = {
        ...standardTestFilters,
        text: 'x',
    };
    const filteredExpenses = visibleExpenses(testExpenses, testFilters);
    expect(filteredExpenses).toEqual([testExpenses[2], testExpenses[0]]);
});

test('Filter - Start Date', () => {
    const testFilters = {
        ...standardTestFilters,
        startDate: moment(0)
    };
    const filteredExpenses = visibleExpenses(testExpenses, testFilters);
    expect(filteredExpenses).toEqual([testExpenses[2], testExpenses[0]]);
});

test('Filter - End Date', () => {
    const testFilters = {
        ...standardTestFilters,
        endDate: moment(0)
    };

    const filteredExpenses = visibleExpenses(testExpenses, testFilters);
    expect(filteredExpenses).toEqual([testExpenses[0], testExpenses[1]]);
});

test('Sort - Amount', () => {
    const testFilters = {
        ...standardTestFilters,
        sortBy: 'amount'
    };
    const filteredExpenses = visibleExpenses(testExpenses, testFilters);
    expect(filteredExpenses).toEqual([ testExpenses[1], testExpenses[2], testExpenses[0] ])
})

test('Sort - Date', () => {
    const testFilters = {
        ...standardTestFilters,
        sortBy: 'date'
    };
    const filteredExpenses = visibleExpenses(testExpenses, testFilters);
    expect(filteredExpenses).toEqual([ testExpenses[2], testExpenses[0], testExpenses[1] ])
});

test('Sort - Ascending', () => {
    const testFilters = {
        ...standardTestFilters,
        sortOrder: 'asc'
    };
    const filteredExpenses = visibleExpenses(testExpenses, testFilters);
    expect(filteredExpenses).toEqual([ testExpenses[1], testExpenses[0], testExpenses[2] ])
});

test('Sort - Descending', () => {
    const testFilters = {
        ...standardTestFilters,
        sortOrder: 'desc'
    };
    const filteredExpenses = visibleExpenses(testExpenses, testFilters);
    expect(filteredExpenses).toEqual([testExpenses[2], testExpenses[0], testExpenses[1] ])
});