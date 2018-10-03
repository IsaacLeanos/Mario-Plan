
const initState={
    projects:[
        {id:'1',title:'ok ok hi yeah', content:'blah blah'},
        {id:'2',title:'ok ok hi yeah', content:'blah blah'},
        {id:'3',title:'ok ok hi yeah', content:'blah blah'}
    ]
}

const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case'CREATE_PROJECT':
        console.log('created proj',action.project)
        return state
        
        case'CREATE_PROJECT_ERROR':
        console.log('created project error',action.err)
        return state

        default:
        return state
    }
}

export default projectReducer