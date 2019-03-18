import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import ProjectsContainer from './components/projectsContainer.jsx'

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
        { projects && projects.map((project) => <div>{project.title}</div>)}
      </div>
    )
  }
}

export default Home
