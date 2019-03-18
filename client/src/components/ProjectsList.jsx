import React from 'react'
import Project from './Project'

const ProjectsList = ({ projects, deleteProject }) =>
  <React.Fragment>
    { projects.map(project => {
      return (
        <Project
          key={project.id}
          project={project}
          deleteProject={deleteProject}
        />
      )
    })}
  </React.Fragment>

export default ProjectsList
