import React from 'react'
import Header from '../Header'
import classes from '../../styles/App/CoreLayout.scss'
import '../../styles/App/core.scss'

export const App = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

App.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default App
