import React from 'react'
import{connect}from'react-redux'
import{compose}from'redux'
import{Redirect}from'react-router-dom'
import moment from 'moment'

import{firestoreConnect}from'react-redux-firebase'

const ProjectDetails=(props) => {
  const {project,auth}=props  
  if(!auth.uid){return <Redirect to='/signin'/>}
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
        <div>{moment(project.createdAt.toDate()).calendar()}</div>
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
  const id=props.match.params.id
  const projects=state.firestoreReducer.data.projects
  const project=projects?projects[id]:null
  return{
    project:project,
    auth:state.firebaseReducer.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection:'projects'}])
)(ProjectDetails)