import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styles from './PageNav.scss';

const PageNav = () => (
  <nav>
      <h2>PageNav</h2>
      <p><NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink></p>
      <p><NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink></p>
      <p><NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink></p>
      <p><NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active'>Waiter</NavLink></p>
      <p><NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink></p> 
  </nav>
);

export default PageNav;