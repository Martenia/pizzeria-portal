import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.scss';

const Event = (props) => (
  <div className={styles.component}>
      <h2>Event</h2>
      <p>widok pojedynczego eventu</p>
      <p>{props.match.params.id}</p>
  </div>
);

Event.propTypes ={
  match: PropTypes.any,
};

export default Event;