import React from 'react'
import Project from './Project'

const ProjectsList = ({ projects }) =>
  <React.Fragment>
    { projects.map(project => {
      return (
        <Project
          key={project.id}
          project={project}
        />
      )
    })}
  </React.Fragment>

export default ProjectsList
