import database from '../firebase/firebase';

export const addExpense = (expense = {}) => ({
    type: 'ADD_EXPENSE',
    expense
});

// startAddExpense returns a function, which dispatches and makes changes to the firebase, followed by making changes to the redux-store.
export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        // Get all required attributes from expenseData
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        // Bundle required attributes together in an object
        const expense = { description, note, amount, createdAt };
        
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
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

// Remove chosen data from database, followed by making changes to the redux-store
export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}));
        });
    };
};

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

export const setExpenses =  (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// Fetches the data from Firebase, and dispatches setExpenses
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // Return the promise which is expected in app.js
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expensesInDB = [];
            
            snapshot.forEach((childSnapshot) => {
                expensesInDB.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expensesInDB));
        });
    };
};