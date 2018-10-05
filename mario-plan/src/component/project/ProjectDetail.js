import React from 'react'
import{connect}from'react-redux'
import{compose}from'redux'

import{firestoreConnect}from'react-redux-firebase'

const ProjectDetails=(props) => {
  const {project}=props  
  console.log('project',project)
  if(project){
    return (
      <div className='container section project-details'>
  
        <div className='card'>
        <div className='card-content'>
        <span className='card-title'>{project.title}</span>
        <p>{project.content}</p>
        </div>
  
        <div className='card-action grey lighten-4 grey-text'>
        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
        <div>2ns Sep, 2:am</div>
        </div> 
  
        </div>
      </div>
    )
  }else{
    return(
      <div className='container'>
      <p>loading project details....</p>
      </div>
    )
  }
}

const mapStateToProps=(state,props)=>{
  console.log(state)
  const id=props.match.params.id
  const projects=state.firestoreReducer.data.projects
  const project=projects?projects[id]:null
  return{
    project:project
  }
}

export default compose(
  connect(mapStateToProps),
  //firebase listen/display from projects collection
  firestoreConnect([{collection:'projects'}])
)(ProjectDetails)