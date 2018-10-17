


export const signIn=(credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()
        console.log('getFirebase object',firebase)
        firebase.auth().signInWithEmailAndPassword(credentials.email,credentials.password)
        .then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        })
        .catch((e)=>{
            dispatch({type:'LOGIN_ERROR',e})
        })
    }
}

export const signOut=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()
        firebase.auth().signOut()
        .then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'})
        })
        .catch((e)=>{
            dispatch({type:'SIGNOUT_ERROR',e})
        })
    }
}

export const signUp=(newUser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase()
        const firestore=getFirestore()
        console.log('getFirestore object',firestore)
        firebase.auth().createUserWithEmailAndPassword(newUser.email,newUser.password)
        .then((res)=>{
            //add document to users collection
            //.add() generates uid, so avoid it here
            console.log('newUser res',res)
            return firestore.collection('users').doc(res.user.uid).set({
                firstName:newUser.firstName,
                lastName:newUser.lastName,
                initials:newUser.firstName[0]+newUser.lastName
            })
        })
        .then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        })
        .catch((e)=>{
            dispatch({type:'SIGNUP_ERROR',e})
        })
    }
}