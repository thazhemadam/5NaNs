import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard'
import AddExpense from '../components/AddExpense'
import Help from '../components/Help'
import EditExpense from '../components/EditExpense'
import Page404 from '../components/Page404'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route component = {Header} />
            <Switch> 
                <Route path = '/add' component = {AddExpense} />
                <Route path = '/edit/:id' component= {EditExpense} />
                <Route path = '/help' component = {Help} />
                <Route path = '/' component = {Dashboard} exact={true}/>
                <Route component = {Page404} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;