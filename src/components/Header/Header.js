import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Styles/Header.scss';

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/poker' activeClassName={classes.activeRoute}>
      Poker
    </Link>
  </div>
)

export default Header;
