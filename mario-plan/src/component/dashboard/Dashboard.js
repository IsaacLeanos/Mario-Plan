import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../project/ProjectList'
import{connect}from'react-redux'
import{compose}from'redux'
import{Redirect}from'react-router-dom'

import{firestoreConnect}from'react-redux-firebase'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const {projects,auth}=this.props
    if(!auth.uid)return <Redirect to='/signin'/>
    return (
      <div                       className='dashboard container'>
        <div                     className='row'>
        <div                     style={{"border":"1px solid red"}} className='col s12 m6'>
        <ProjectList             projects={projects}/>
        </div>

        <div                     style={{"border":"1px solid red"}} className='col s12 m5 off-set-m1'>
        <Notification/>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    projects:state.firestoreReducer.ordered.projects,
    auth:state.firebaseReducer.auth
  }
}

export default compose(
  connect(mapStateToProps),
  //firebase listen/display from projects collection
  firestoreConnect([{collection:'projects'}])
)(Dashboard)
