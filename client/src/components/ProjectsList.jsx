import React from 'react'
import Project from './Project'

const ProjectsList = ({ projects, deleteProject, editProject }) =>
  <div className='projects-list-wrapper'>
    { projects.map(project => {
      return (
        <Project
          key={project.id}
          project={project}
          deleteProject={deleteProject}
          editProject={editProject}
        />
      )
    })}
  </div>

export default ProjectsList
