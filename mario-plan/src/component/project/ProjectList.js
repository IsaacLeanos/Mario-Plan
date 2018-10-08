import React from 'react'
import{Link}from'react-router-dom'
import ProjectSummary from './ProjectSummary'

const ProjectList=({projects})=>{
    return (
      <div className='project-list section'>      
      {projects&&projects.map((i)=>{
        return(
          <Link                      to={`project/${i.id}`} key={i.id}>
          <ProjectSummary            project={i}/>
          </Link>
        )
      })}
      </div>
    )
}

export default ProjectList