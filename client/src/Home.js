import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import ProjectsContainer from './components/projectsContainer.jsx'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
    this.getDrinks = this.getDrinks.bind(this)
    this.getDrink = this.getDrink.bind(this)
  }

  componentDidMount () {
    this.getDrinks()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getDrinks () {
    this.fetch('/api/v1/drinks')
      .then(drinks => {
        if (drinks.length) {
          this.setState({drinks: drinks})
          this.getDrink(drinks[0].id)
        } else {
          this.setState({drinks: []})
        }
      })
  }

  getDrink (id) {
    this.fetch(`/api/drinks/${id}`)
      .then(drink => this.setState({drink: drink}))
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
