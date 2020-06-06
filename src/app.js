import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
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

const Page404 = () => (
    <div>
        404. Page not found.<br/>
        <Link to='/'>Go home.</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>5NaNs</h1>
        <NavLink to = '/' activeClassName="is-active" exact={true}> Dashboard </NavLink>
        <NavLink to = '/edit' activeClassName="is-active"> Edit </NavLink>
        <NavLink to = '/add' activeClassName="is-active"> Add </NavLink>
        <NavLink to = '/help' activeClassName="is-active"> Help </NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route component = {Header} />
            <Switch> 
                <Route path = '/add' component = {AddExpense} />
                <Route path = '/edit' component= {EditExpense} />
                <Route path = '/help' component = {ExpenseHelp} />
                <Route path = '/' component = {ExpenseDashboard} exact={true}/>
                <Route component = {Page404} />
            </Switch>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes,document.getElementById('app'));