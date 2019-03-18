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
      drinks: [],
      hasData: false
    }
    this.getDrinks = this.getDrinks.bind(this)
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
    this.fetch('https://gentle-earth-22725.herokuapp.com/api/v1/drinks')
      .then(drinks => {
        if (drinks.length) {
          this.setState({drinks: drinks, hasData: true})
          this.getDrink(drinks[0].id)
        } else {
          this.setState({drinks: []})
        }
      })
  }

  getDrink(id) {
    this.fetch(`https://gentle-earth-22725.herokuapp.com/api/v1/drinks/${id}`)
      .then(drink => this.setState({drink: drink}))
  }

  renderPage() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact render={(props) => (
            <Home {...props} data={this.state.drinks} />
          )} />
          <Route path='/tommy-admin' exact render={(props) => (
            <ProjectsContainer {...props} data={this.state.drinks} />
          )} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }

  render () {
    return(
      <div>
        { this.state.hasData ? this.renderPage() : '' }
      </div>
    )
  }
}

export default App
