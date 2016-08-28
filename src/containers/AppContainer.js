import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

export const AppContainer = ({ history, routes, store }) => (
  <Provider store={store}>
    <div style={{ height: '100%' }}>
      <Router history={history} children={routes} />
    </div>
  </Provider>
)

AppContainer.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default AppContainer;
