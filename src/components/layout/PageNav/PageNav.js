import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styles from './PageNav.scss';

const PageNav = () => (
  <nav>
      <h2>PageNav</h2>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active'>Waiter</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
  </nav>
);

export default PageNav;