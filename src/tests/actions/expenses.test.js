import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Remove Expense Action Object', () => {
    const action = removeExpense({id:'123abc'})
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id: "123abc"
    })
})

test('Edit Expense Action Object', () => {
    const action = editExpense('123abc', {note: 'new note value'})
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id: "123abc",
        updates: {
            note: 'new note value'
        }
    })
})

test('Add Expense Action Object - provided values', ()=> {
    const expenseTestData ={
        description: 'Expensive Test',
        amount: 42069,
        createdAt: 666,
        note: 'This is for testing the add expense object, when values are provided'
    }

    const action = addExpense(expenseTestData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseTestData,
            id: expect.any(String)
        }
    });
})

test('Add Expense Action Object - default values', ()=> {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount:0,
            note: '',
            createdAt:0

        }
    })
    
})
