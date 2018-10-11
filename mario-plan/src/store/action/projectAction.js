



export const createProject=(project)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore()
        // console.log('getFirestore object',firestore)
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'first',
            authorLastName:'second',
            authorId:1234,
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