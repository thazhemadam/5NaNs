import {v4 as uuidv4} from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense = {}) => ({
    type: 'ADD_EXPENSE',
    expense
});

// startAddExpense returns a function, which dispatches and makes changes to the firebase, followed by making changes to the redux-store.
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        // Get all required attributes from expenseData
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        // Bundle required attributes together in an object
        const expense = { description, note, amount, createdAt };
        
        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export const removeExpense = ( {id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
