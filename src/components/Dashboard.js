import React from 'react';
import ExpenseList from './ExpenseList';
import { connect } from 'react-redux';
const Dashboard = () => (
    <div>
        <ExpenseList />
    </div>
);

export default Dashboard;