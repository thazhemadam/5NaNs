import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk'; 

// The redux-store which records the state.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

    const store = createStore(combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))        //So that the store can be tracked using Redux devtools
    );
    return store;
}
