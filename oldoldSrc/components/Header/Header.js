import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from '../../Styles/Header/Header.scss'

export const Header = () => (
  <div>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/game' activeClassName={classes.activeRoute}>
      Poker
    </Link>
  </div>
)

export default Header
