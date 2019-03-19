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
    this.addNewProject = this.addNewProject.bind(this)
  }

  addNewProject = (title, description, url) => {
    let body = JSON.stringify({project: {title, description, url}})
    console.log(body)
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
        <h1>Admin</h1>
        { projects &&
          <ProjectsList
            projects={projects}
            deleteProject={this.deleteProject}
          />
        }
        { showNewForm ?
          <NewForm
            onNewProject={this.addNewProject}
          /> :
          <button onClick={this.toggleShowNewForm}>Add a new project</button>
        }
      </React.Fragment>
    )
  }
}

export default ProjectsContainer
