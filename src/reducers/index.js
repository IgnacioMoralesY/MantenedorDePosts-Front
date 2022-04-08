import { combineReducers } from 'redux'
import postState from './postReducer'
import messageState from './messageReducer'

export default combineReducers({
  postState,
  messageState
})
