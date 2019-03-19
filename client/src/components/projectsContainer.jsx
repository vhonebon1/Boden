import React from 'react'
import NewForm from './newProjectForm'
import ProjectsList from './ProjectsList'

class ProjectsContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      projects: this.props.data,
      showNewForm: false
    }
    this.deleteProject = this.deleteProject.bind(this)
  }

  addNewProject = (title) => {
    let body = JSON.stringify({project: {title}})
    fetch('https://gentle-earth-22725.herokuapp.com/api/v1/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => this.setState({projects: response}))
  }

  deleteProject(id) {
    fetch(`https://gentle-earth-22725.herokuapp.com/api/v1/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => console.log(response))
  }

  toggleShowNewForm = () => {
    this.setState({showNewForm: !this.state.showNewForm})
  }

  render() {
    const { projects, showNewForm } = this.state
    return(
      <React.Fragment>
        { projects &&
          <ProjectsList
            projects={projects}
            deleteProject={this.deleteProject}
          />
        }
        { showNewForm ?
          <NewForm
            onNewproject={this.addNewproject}
          /> :
          <button onClick={this.toggleShowNewForm}>Add a new project</button>
        }
      </React.Fragment>
    )
  }
}

export default ProjectsContainer
