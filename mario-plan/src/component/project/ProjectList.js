import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList=({projects})=>{
    return (
      <div className='project-list section'>      
      {projects&&projects.map((i)=>{
        return(
          <ProjectSummary project={i} key={i.id}/>
        )
      })}
      </div>
    )
}

export default ProjectList