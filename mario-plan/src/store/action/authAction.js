


export const signin=(credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()
        console.log('getFirebase object',firebase)
        firebase.auth().signInWithEmailAndPassword(credentials.email,credentials.password)
        .then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        })
        .catch((err)=>{
            dispatch({type:'LOGIN_ERROR',err})
        })
    }
}