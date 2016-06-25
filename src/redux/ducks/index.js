/**
 * Composed reducer
 */
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as resolver } from 'react-redux-universal-resolver'

export default combineReducers({
  routing,
  resolver
})
