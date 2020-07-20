import { 
            addExpense, 
            startAddExpense, 
            editExpense, 
            startEditExpense,
            removeExpense,
            startRemoveExpense,
            setExpenses, 
            startSetExpenses 
        } from '../../src/actions/expenses'
import testExpenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../src/firebase/firebase';

const testUID = 'testUID00';
const defaultAuthState = {auth: {uid: testUID}};
const createMockStore = configureMockStore([thunk]);

beforeEach((done)=> {
    const expensesTestData = {};
    testExpenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesTestData[id] = {description, note, amount, createdAt };
    });
    database.ref(`users/${testUID}/expenses`).set(expensesTestData).then(() => done());
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
    const testStore = createMockStore(defaultAuthState);
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

        return database.ref(`users/${testUID}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        //checks if testExpenseData is written to database database is
        expect(snapshot.val()).toEqual(expenseTestData);
        done();
    }); 
});

test('Add expense to db and store - default values', (done) => {
    const testStore = createMockStore(defaultAuthState);
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

        return (database.ref(`users/${testUID}/expenses/${actions[0].expense.id}`)).once('value');
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
    const testStore = createMockStore(defaultAuthState);
    testStore.dispatch(startSetExpenses()).then(() => {
        const actions = testStore.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses: testExpenses
        });
        done();
    });
});

test('Remove Expense from Firebase', (done) => {
    const testStore = createMockStore(defaultAuthState);
    const id = testExpenses[2].id;
    testStore.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = testStore.getActions();
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id
        });
        return database.ref(`users/${testUID}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('Edit Expense on Firebase', (done) => {
    const testStore = createMockStore(defaultAuthState);
    const id = testExpenses[1].id;
    const updates = {amount: 666420};
    testStore.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = testStore.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${testUID}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    });
});