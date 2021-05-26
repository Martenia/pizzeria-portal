import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.scss';
import { Link } from 'react-router-dom';

const Waiter = ({id='123abc'}) => (
  <div className={styles.component}>
      <h2>Waiter</h2>
      <p>widok kelnera</p>
      <p><Link to={`${process.env.PUBLIC_URL}/ordering/new`}><span>New Order</span></Link></p>
      <p><Link to={`${process.env.PUBLIC_URL}/ordering/order/${id}`}><span>Order</span></Link></p>
  </div>
);

Waiter.propTypes = {
  id: PropTypes.string,
};

export default Waiter;