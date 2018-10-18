import React from 'react'
import moment from 'moment'

const ProjectSummary=({project})=>{
  console.log('date',project.createdAt)
    return (
      <div className='project-list section'>

      <div className='card  project-summary'>
      <div className='card-content grey-text text-darken-3'>
      <span className='card-title'>{project.title}</span>
      <p>{project.content}</p>
      <p className='grey-text'>{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
      </div>
      
      </div>
    )
}

export default ProjectSummary