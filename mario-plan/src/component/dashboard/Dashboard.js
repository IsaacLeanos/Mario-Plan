import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../project/ProjectList'
import{connect}from'react-redux'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const {projects}=this.props
    return (
      <div                       className='dashboard container'>
        <div                     className='row'>
        <div                     style={{"border":"1px solid red;"}} className='col s12 m6'>
        <ProjectList             projects={projects}/>
        </div>

        <div                     style={{"border":"1px solid red;"}} className='col s12 m5 off-set-m1'>
        <Notification/>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  projects:state.projectReducer.projects
})

export default connect(mapStateToProps)(Dashboard)
