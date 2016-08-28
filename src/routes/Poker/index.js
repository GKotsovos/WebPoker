import { injectReducer } from 'store/reducers';

export default (store) => ({
  path: 'poker',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Poker = require('./containers/pokerContainer').default
      const reducer = require('./modules/poker').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'poker', reducer })

      /*  Return getComponent   */
      cb(null, Poker)

    /* Webpack named bundle   */
  }, 'Poker')
  }
})
