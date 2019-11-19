import userReducer from './userReducer.js'
import projectReducer from './projectReducer.js'
import authReducer from './authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  // auth: authReducer
});

export default rootReducer