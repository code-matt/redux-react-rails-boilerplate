import { combineReducers } from 'redux'
import { token } from './auth'
import { app } from './app'
import { favorites } from './favorites'

const MIGHSchedulerApp = combineReducers({
  token,
  app,
  favorites
})

export default MIGHSchedulerApp
