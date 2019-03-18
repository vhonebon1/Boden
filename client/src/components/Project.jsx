import React from 'react'

const Project = ({ project, key, deleteProject }) =>
  <div className='project-wrapper'>
    <div>{project.id}</div>
    <div>{project.title}</div>
    <button onClick={() => deleteProject(project.id)}>Delete</button>
  </div>

export default Project
