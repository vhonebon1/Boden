import React from 'react'
import Project from './Project'

const ProjectsList = ({ projects, deleteProject }) =>
  <div className='projects-list-wrapper'>
    { projects.map(project => {
      return (
        <Project
          key={project.id}
          project={project}
          deleteProject={deleteProject}
        />
      )
    })}
  </div>

export default ProjectsList
