import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses } from '../../src/actions/expenses'
import testExpenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../src/firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=> {
    const expensesTestData = {};
    testExpenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesTestData[id] = {description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesTestData).then(() => done());
});

test('Generate action object - Remove Expense', () => {
    const action = removeExpense({id:'123abc'})
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id: "123abc"
    })
})

test('Generate action object - Edit Expense', () => {
    const action = editExpense('123abc', {note: 'new note value'})
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id: "123abc",
        updates: {
            note: 'new note value'
        }
    })
})

test('Generate action object - Add Expense - provided values', ()=> {

    const action = addExpense(testExpenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: testExpenses[2]
    });
});

test('Add Expense to db and store - provided values', (done) => {
    const testStore = createMockStore({});
    const expenseTestData = {
        description: 'db & store add expense',
        amount: 1234,
        note: 'This is for provided values',
        createdAt: 1010101
    }
    
    testStore.dispatch(startAddExpense(expenseTestData)).then(() => {
        
        const actions = testStore.getActions();
        // actions contains the data that is returned from the return statement after writing to the db (i.e., the return statement inside the return statement in startAddExpense).
        // checks if action is dispatched
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseTestData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        //checks if testExpenseData is written to database database is
        expect(snapshot.val()).toEqual(expenseTestData);
        done();
    }); 
});

test('Add expense to db and store - default values', (done) => {
    const testStore = createMockStore({});
    const expenseTestDefaultData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    testStore.dispatch(startAddExpense(expenseTestDefaultData)).then(() => {

        const actions = testStore.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseTestDefaultData
            }
        });

        return (database.ref(`expenses/${actions[0].expense.id}`)).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseTestDefaultData);
        done();
    });
});

test('Generate action object - Set Expenses', () => {
    const action = setExpenses(testExpenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses: testExpenses
    });
});

test('Fetch Expenses from Firebase', (done) => {
    const testStore = createMockStore({});
    testStore.dispatch(startSetExpenses()).then(() => {
        const actions = testStore.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses: testExpenses
        });
        done();
    });
});