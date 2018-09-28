
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
        console.log('created proj')
    }
    return state
}

export default projectReducer