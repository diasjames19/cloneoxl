import {combineReducers, combinerReducers } from "redux"
import userReducer from './reducers/userReducers'

export default combineReducers({
    user:userReducer
})

