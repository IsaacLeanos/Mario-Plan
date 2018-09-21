import React from 'react'

const ProjectDetails=(props) => {
  const id=props.match.params.id  
  return (
    <div className='container section project-details'>
      <div className='card'>
      <div className='card-content'>
      <span className='card-title'>Project Title {id}</span>
      <p>lorem  mwom womwomcowmcomwcomw womcowmomcmowmiqmc cmimecioe</p>
      </div>
      <div className='card-action grey lighten-4 grey-text'>
      <div>Posted by user</div>
      <div>2ns Sep, 2:am</div>
      </div> 
      </div>
    </div>
  )
}

export default ProjectDetails
