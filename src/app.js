import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
//BrowserRouter will be used once.
//Route will be used for each of the extra pages.
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dash okay
    </div>
);

const ExpenseHelp = () => (
    <div>
        Hellloo
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
        
        <Route path = '/add' component = {ExpenseHelp} exact={true}/>
        <Route path = '/' component = {ExpenseDashboardPage} exact={true}/>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes,document.getElementById('app'));