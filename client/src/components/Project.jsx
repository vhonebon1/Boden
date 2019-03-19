import React from 'react'
import EditForm from './editForm'

const Project = ({ project, key, deleteProject, editProject }) =>
  <div className="project-wrapper">
    <img className="admin-image" alt="" src={`http://img.youtube.com/vi/${project.url}/0.jpg`} />
    <EditForm project={project} editProject={editProject} />
    <div className="project-action-buttons">
      <button className="action-button" onClick={() => deleteProject(project.id)}>Delete project</button>
    </div>
  </div>

export default Project
