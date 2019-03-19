import React, { Component } from 'react'
import ProjectsContainer from './components/projectsContainer.jsx'
import Header from './components/header'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: this.props.data
    }
  }

  render () {
    const { projects } = this.state
    return(
      <div>
        <Header />
        { projects && projects.map((project) => <div>{project.title}</div>)}
      </div>
    )
  }
}

export default Home
