import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import Help from '../components/Help';
import EditExpense from '../components/EditExpense';
import Page404 from '../components/Page404';
import Header from '../components/Header';
import Login from '../components/Login';

export const history = createHistory();
const AppRouter = () => (
    <Router history={history}>
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
    </Router>
);

export default AppRouter;