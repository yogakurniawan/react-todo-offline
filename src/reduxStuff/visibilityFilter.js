import types from 'constants/actionTypes'
import constants from 'constants/todoFilters'

const {
  SHOW_ALL
} = constants

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
