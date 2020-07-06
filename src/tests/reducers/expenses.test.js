import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import testExpenses from '../fixtures/expenses';

test('Setup default values for expenses property in redux-store.', () => {
    const testState = expensesReducer(undefined, {
        type: "@@INIT"
    });
    expect(testState).toEqual([]);
});

test('Remove Expense - Valid ID', () => {
    const testAction = {
        type: 'REMOVE_EXPENSE',
        id: testExpenses[1].id
    };
    const testState = expensesReducer(testExpenses, testAction);
    expect(testState).toEqual([testExpenses[0], testExpenses[2]]);
});

test('Do not Remove Expense - Invalid ID', () => {
    const testAction = {
        type: 'REMOVE_EXPENSE',
        id: -69
    };
    const testState = expensesReducer(testExpenses, testAction);
    expect(testState).toEqual(testExpenses);
});

test('Add Expense', () => {
    const addExpense = {
        id: 5,
        description: 'Extra One',
        note: 'Add Expense test case from reducers/expenses.test.js',
        amount: 1010101,
        createdAt: moment(100)
    };
    const testAction = {
        type: 'ADD_EXPENSE',
        expense: addExpense
    };
    const testState = expensesReducer(testExpenses, testAction);
    expect(testState).toEqual([...testExpenses, addExpense])
});


test('Remove Expense - Valid ID', () => {
    const testAction = {
        type: 'REMOVE_EXPENSE',
        id: testExpenses[2].id
    };
    const testState = expensesReducer(testExpenses, testAction);
    expect(testState).toEqual([testExpenses[0], testExpenses[1]]);
});


test('Add Expense', () => {
    const addExpense = {
        id: 4,
        description: 'Another One',
        note: 'Add Expense test case from reducers/expenses.test.js',
        amount: 666420,
        createdAt: moment(100)
    };
    const testAction = {
        type: 'ADD_EXPENSE',
        expense: addExpense
    };
    const testState = expensesReducer(testExpenses, testAction);
    expect(testState).toEqual([...testExpenses, addExpense])
});

test('Edit Expense - Valid ID', () => {
    const editAmount = 1234567;
    const testAction = {
        type: 'EDIT_EXPENSE',
        id: testExpenses[2].id,
        updates: {
            amount: editAmount
        }
    };

    const testState = expensesReducer(testExpenses, testAction);
    expect(testState[2].amount).toBe(editAmount);
});

test('Do not Edit Expense - Invalid ID', () => {
    
    const editAmount = 1234567;
    const testAction = {
        type: 'EDIT_EXPENSE',
        id: -69,
        updates: {
            amount: editAmount
        }
    };

    const testState = expensesReducer(testExpenses, testAction);
    expect(testState).toEqual(testExpenses);
});