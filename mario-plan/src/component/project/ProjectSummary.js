import React from 'react'

const ProjectSummary=({project})=>{
    return (
      <div className='project-list section'>

      <div className='card  project-summary'>
      <div className='card-content grey-text text-darken-3'>
      <span className='card-title'>{project.title}</span>
      <p>{project.content}</p>
      <p className='grey-text'>Sep 19 2:am</p>
      </div>
      </div>
      
      </div>
    )
}

export default ProjectSummary