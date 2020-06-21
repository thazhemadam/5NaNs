import 'normalize.css/normalize.css';
import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/visibleExpenses.js';
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount:5000}))
store.dispatch(addExpense({description: 'gas bill'}))
store.dispatch(setTextFilter('gas'))
const {expenses, filters}  = store.getState()
const visibleExpenses = getVisibleExpenses(expenses, filters);
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));