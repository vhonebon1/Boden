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
    this.editProject = this.editProject.bind(this)
  }

  addNewProject = (title, description, url, large) => {
    let body = JSON.stringify({project: {title, description, url, large}})
    fetch('http://localhost:3001/api/v1/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => this.setState({projects: response}))
  }

  deleteProject(id) {
    fetch(`http://localhost:3001/api/v1/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => console.log(response))
  }

  editProject(id, title, description, url, large) {
    let body = JSON.stringify({project: {id, title, description, url, large}})
    fetch(`http://localhost:3001/api/v1/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => console.log(response))
  }

  toggleShowNewForm = () => {
    this.setState({showNewForm: !this.state.showNewForm})
  }

  render() {
    const { projects, showNewForm } = this.state
    console.log(projects)
    return(
      <React.Fragment>
        <h1>Admin</h1>
        { projects &&
          <ProjectsList
            projects={projects}
            deleteProject={this.deleteProject}
            editProject={this.editProject}
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
