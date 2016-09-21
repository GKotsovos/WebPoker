import CoreLayout from 'layouts/CoreLayout';
import Poker from './Poker';

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Poker(store)
})

export default createRoutes;
