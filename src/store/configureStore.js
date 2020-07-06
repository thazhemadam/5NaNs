import {createStore, combineReducers} from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
// The redux-store which records the state.

export default () => {

    const store = createStore(combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
        }),
        (!process.env.NODE_ENV || process.env.NODE_ENV!=='production') && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        //So that the store can be tracked using Redux devtools
    );
    return store;
}
