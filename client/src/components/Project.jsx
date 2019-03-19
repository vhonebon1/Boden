import React from 'react'

const Project = ({ project, key, deleteProject }) =>
  <div className="project-wrapper">
    <img className="admin-image" alt="" src={`http://img.youtube.com/vi/${project.url}/0.jpg`} />
    <div>{project.title}</div>
    <div className="project-action-buttons">
      <button className="action-button" onClick={() => deleteProject(project.id)}>Delete project</button>
    </div>
  </div>

export default Project
