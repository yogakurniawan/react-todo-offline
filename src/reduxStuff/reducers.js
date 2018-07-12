import { combineReducers } from 'redux'

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import loading from './loadingReducer'
import error from './errorReducer'

export default combineReducers({
  todos,
  visibilityFilter,
  loading,
  error
})
