import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.scss';

const Order = (props) => (
  <div className={styles.component}>
      <h2>Order</h2>
      <p>widok pojedynczego zamówienia</p>
      <p>{props.match.params.id}</p>
  </div>
);

Order.propTypes ={
  match: PropTypes.any,
};

export default Order;