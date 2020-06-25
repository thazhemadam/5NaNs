import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>5NaNs</h1>
        <NavLink to = '/' activeClassName="is-active" exact={true}> Dashboard </NavLink>
        <NavLink to = '/add' activeClassName="is-active"> Add </NavLink>
    </header>
);

export default Header;