import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../project/ProjectList'

class Dashboard extends Component {
  render() {
    return (
      <div                       className='dashboard container'>
        <div                     className='row'>
        <div                     style={{"border":"1px solid red;"}} className='col s12 m6'>
        <ProjectList/>
        </div>

        <div                     style={{"border":"1px solid red;"}} className='col s12 m5 off-set-m1'>
        <Notification/>
        </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
