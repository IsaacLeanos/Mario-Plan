



export const createProject=(project)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore()
        // console.log('getFirestore object',firestore)
        const profile=getState().firebaseReducer.profile
        const authorId=getState().firebaseReducer.auth.uid
        firestore.collection('projects').add({
            ...project,
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            authorId:authorId,
            createdAt:new Date()
        })
        .then(()=>{
            dispatch({type:'CREATE_PROJECT',project})
        })
        .catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err})
        })
    }
}