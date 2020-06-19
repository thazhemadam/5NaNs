import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/visibleExpenses.js';
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill'}))
store.dispatch(addExpense({description: 'gas bill'}))
store.dispatch(setTextFilter('water'))
const {expenses, filters}  = store.getState()
const visibleExpenses = getVisibleExpenses(expenses, filters);
console.log(visibleExpenses)

ReactDOM.render(<AppRouter />,document.getElementById('app'));