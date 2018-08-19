import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Styles from 'styles/main.scss';
import _ from 'underscore';

export const Pot = ({ pot }) => (
  <div className={Styles.pot}>
    <h2>{ pot === 0 ? null : `Pot:${pot}` }</h2>
  </div>
)

Pot.propTypes = {
  pot: PropTypes.string.isRequired
};

export default Pot;
