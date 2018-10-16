const initState={
    authError:null
}

const authReducer=(state=initState,action)=>{
    switch(action.type){
        case'LOGIN_SUCCESS':
        console.log('login success')
        return{...state,authError:null}
        
        case'LOGIN_ERROR':
        console.log('login error',action.e)
        return{...state,authError:action.e.message}  //'Login failed'
        
        case'SIGNOUT_SUCCESS':
        console.log('signed out')
        return {state,authError:null}
        
        case'SIGNUP_SUCCESS':
        console.log('signup success')
        return {...state,authError:null}
        
        case'SIGNUP_ERROR':
        console.log('signup error',action.e)
        return {state,authError:action.e.message}
        
        default:
        return state
    }
}

export default authReducer