import {
  makeActionCreator
} from 'utils/common'
import constants from 'constants/actionTypes'

export const setRunning = makeActionCreator(constants.SET_RUNNING, 'payload')
export const setTimeLeft = makeActionCreator(constants.SET_TIME_LEFT, 'payload')

// export const addTodo = makeActionCreator(constants.ADD_TODO, 'text')
export const deleteTodo = makeActionCreator(constants.DELETE_TODO, 'id')
export const editTodo = makeActionCreator(constants.EDIT_TODO, 'id', 'text')
export const completeTodo = makeActionCreator(constants.COMPLETE_TODO, 'id')
export const completeAllTodos = makeActionCreator(constants.COMPLETE_ALL_TODOS)
export const clearCompleted = makeActionCreator(constants.CLEAR_COMPLETED)
export const setVisibilityFilter = makeActionCreator(constants.SET_VISIBILITY_FILTER, 'filter')

export function addTodo(text) {
  return {
    type: constants.ADD_TODO,
    text,
    meta: {
      offline: {
        effect: {
          url: '/todos'
        },
        commit: {
          type: 'ADD_TODO_SUCCESS'
        },
        rollback: {
          type: 'ADD_TODO_FAILURE'
        }
      }
    }
  }
}
