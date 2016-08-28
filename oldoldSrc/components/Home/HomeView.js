import React from 'react'
import DuckImage from '../../styles/Home/Duck.jpg'
import classes from '../../styles/Home/HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className={classes.duck}
      src={DuckImage} />
  </div>
)

export default HomeView
