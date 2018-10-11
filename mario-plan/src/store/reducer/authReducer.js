const initState={
    authError:null
}

const authReducer=(state=initState,action)=>{
    switch(action.type){
        case'LOGIN_SUCCESS':
        return{...state,authError:null}

        case'LOGIN_ERROR':
        return{...state,authError:'Login failed'}

        case'SIGNOUT_SUCCESS':
        console.log('signed out')
        return state

        // case'LOGIN_ERROR':
        // return{...state,authError:'Login failed'}
        
        default:
        return state
    }
}

export default authReducer