import { injectReducer } from 'store/reducers';

export default (store) => ({
  path: 'poker',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Poker = require('./components/Poker').default
      const reducer = require('./modules/poker').default
      injectReducer(store, { key: 'poker', reducer })
      cb(null, Poker)
    }, 'Poker')
  }
})
