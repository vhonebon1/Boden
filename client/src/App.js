import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import ProjectsContainer from './components/projectsContainer.jsx'
import NotFound from './NotFound'
import './manifest.scss'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      hasData: false
    }
    this.getProjects = this.getProjects.bind(this)
  }

  componentDidMount () {
    this.getProjects()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getProjects () {
    this.fetch('http://localhost:3001/api/v1/projects')
      .then(projects => {
        if (projects && projects.length) {
          this.setState({projects: projects, hasData: true})
        } else {
          this.setState({projects: []})
        }
      })
  }

  getProject(id) {
    this.fetch(`http://localhost:3001/api/v1/projects/${id}`)
      .then(project => this.setState({project: project}))
  }

  renderPage() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact render={(props) => (
            <Home {...props} data={this.state.projects} />
          )} />
          <Route path='/tommy-admin' exact render={(props) => (
            <ProjectsContainer {...props} data={this.state.projects} />
          )} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }

  render () {
    return(
      <div className='app-wrapper'>
        { this.state.hasData ? this.renderPage() : '' }
      </div>
    )
  }
}

export default App
