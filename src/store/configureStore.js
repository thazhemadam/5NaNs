import {createStore, combineReducers} from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
// The redux-store which records the state.

export default () => {

    const store = createStore(combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
        })
    );
    return store;
}
