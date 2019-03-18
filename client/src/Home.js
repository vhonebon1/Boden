import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import ProjectsContainer from './components/projectsContainer.jsx'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      drinks: this.props.data
    }
  }

  render () {
    const { drinks } = this.state
    return(
      <div>
        { drinks && drinks.map((drink) => <div>{drink.title}</div>)}
      </div>
    )
  }
}

export default Home
