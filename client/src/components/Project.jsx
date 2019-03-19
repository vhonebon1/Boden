import React from 'react'

const Project = ({ project, key, deleteProject }) =>
  <div className="project-wrapper">
    <div>{project.title}</div>
    <div>{project.description}</div>
    <div>{project.url}</div>
  </div>

export default Project
