import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/visibleExpenses.js';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount:5000}));
store.dispatch(addExpense({description: 'gas bill', createdAt:1000}));
store.dispatch(addExpense({description: 'rent', amount:192323}));

const {expenses, filters}  = store.getState();
const visibleExpenses = getVisibleExpenses(expenses, filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));