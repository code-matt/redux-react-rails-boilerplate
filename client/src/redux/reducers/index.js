import { combineReducers } from 'redux'
import { token } from './auth'
import { appData } from './appData'
import { favorites } from './favorites'

const MIGHSchedulerApp = combineReducers({
  token,
  appData,
  favorites
})

export default MIGHSchedulerApp
