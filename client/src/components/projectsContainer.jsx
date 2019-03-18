import React from 'react'
import NewForm from './newProjectForm'
import ProjectsList from './ProjectsList'

class ProjectsContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      drinks: this.props.data
    }
  }

  render() {
    return(
      <React.Fragment>
        <ProjectsList
          projects={this.state.drinks}
        />
        <NewForm
          onNewDrink={this.addNewDrink}
        />
      </React.Fragment>
    )
  }
}

export default ProjectsContainer
