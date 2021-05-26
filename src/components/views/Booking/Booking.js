import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.scss';

const Booking = (props) => (
  <div className={styles.component}>
      <h2>Booking</h2>
      <p>widok pojedynczej rezerwacji</p>
      <p>{props.match.params.id}</p>
  </div>
);

Booking.propTypes ={
  match: PropTypes.any,
};

export default Booking;