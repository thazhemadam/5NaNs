import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = ({startLogout}) => (
    <header>
        <h1>5NaNs</h1>
        <NavLink to = '/' activeClassName="is-active" exact={true}> Dashboard </NavLink>
        <NavLink to = '/add' activeClassName="is-active"> Add </NavLink>
        <button onClick = {startLogout}> Logout </button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);