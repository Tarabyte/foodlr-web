import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import reducer from './ducks'

export default (history, initial) => {
  // link history to state
  const middlewares = [routerMiddleware(history)]

  const store = createStore(
    reducer,
    initial,
    applyMiddleware(...middlewares)
  )

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./ducks', () => {
      store.replaceReducer(require('./ducks').default) // eslint-disable-line global-require
    })
  }

  return store
}
