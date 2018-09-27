import authReducer from './authReducer'
import projectReducer from './projectReducer'
import{combineReducers}from'redux'

const rootReducer=combineReducers({
    authReducer:authReducer,
    projectReducer:projectReducer
})

export default rootReducer