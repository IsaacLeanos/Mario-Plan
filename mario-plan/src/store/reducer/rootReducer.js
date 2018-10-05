import authReducer from './authReducer'
import projectReducer from './projectReducer'
import{combineReducers}from'redux'

import{firestoreReducer}from'redux-firestore'

const rootReducer=combineReducers({
    authReducer:authReducer,
    projectReducer:projectReducer,
    //connects firebase to redux
    firestoreReducer:firestoreReducer
})

export default rootReducer