import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Page404 from '../components/Page404';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path = '/' component = {Login} exact={true}/>
                <PrivateRoute path='/dashboard' component = {Dashboard}/>
                <PrivateRoute path = '/add' component = {AddExpense} />
                <PrivateRoute path = '/edit/:id' component= {EditExpense} />
                <Route component = {Page404} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;