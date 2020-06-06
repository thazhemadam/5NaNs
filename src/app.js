import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
//BrowserRouter will be used once.
//Route will be used for each of the extra pages.
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboard = () => (
    <div>
        This is from my dashboard
    </div>
);

const AddExpense = () => (
    <div>
        Add Expense Page
    </div>
);

const ExpenseHelp = () => (
    <div>
        Help Page
    </div>
);

const EditExpense = () => (
    <div>
        Edit your Expense
    </div>
);

const routes = (
    <BrowserRouter>
        <div> 
        <Route path = '/add' component = {AddExpense} exact={true}/>
        <Route path = '/edit' component= {EditExpense} exact = {true} />
        <Route path = '/help' component = {ExpenseHelp} exact={true} />
        <Route path = '/' component = {ExpenseDashboard} exact={true}/>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes,document.getElementById('app'));