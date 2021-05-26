import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';

const Tables = ({id='123abc'}) => (
  <div className={styles.component}>
      <h2>Tables</h2>
      <p>widok dostępności stolików</p>
      <p><Link to={`${process.env.PUBLIC_URL}/tables/booking/${id}`}><span>Booking</span></Link></p>
      <p><Link to={`${process.env.PUBLIC_URL}/tables/event/${id}`}><span>Event</span></Link></p>
  </div>
);

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;