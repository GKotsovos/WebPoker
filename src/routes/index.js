import CoreLayout from 'layouts/CoreLayout';
import Home from './Home';
import Poker from './Poker';

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    Poker(store)
  ]
})

export default createRoutes;
