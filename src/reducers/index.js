import { combineReducers } from 'redux'
import item from './item'
import location from './location'
import user from './user'

export default combineReducers({
  item,
  location,
  user
})