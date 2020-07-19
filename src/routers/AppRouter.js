import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import Help from '../components/Help';
import EditExpense from '../components/EditExpense';
import Page404 from '../components/Page404';
import Header from '../components/Header';
import Login from '../components/Login';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route component = {Header} />
            <Switch> 
                <Route path = '/' component = {Login} exact={true}/>
                <Route path='/dashboard' component = {Dashboard}/>
                <Route path = '/add' component = {AddExpense} />
                <Route path = '/edit/:id' component= {EditExpense} />
                <Route path = '/help' component = {Help} />
                <Route component = {Page404} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;