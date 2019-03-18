import React from 'react'
import NewForm from './newProjectForm'
import ProjectsList from './ProjectsList'

class ProjectContainer extends React.Component {

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
    this.fetch('https://gentle-earth-22725.herokuapp.com/api/v1/drinks')
      .then(drinks => {
        if (drinks.length) {
          console.log('hi')
          this.setState({drinks: drinks})
          this.getDrink(drinks[0].id)
        } else {
          this.setState({drinks: []})
        }
      })
  }

  getDrink (id) {
    this.fetch(`https://gentle-earth-22725.herokuapp.com/api/v1/drinks/${id}`)
      .then(drink => this.setState({drink: drink}))
  }

  addNewDrink(title){
    let body = JSON.stringify({drink: {title}})
    fetch('https://gentle-earth-22725.herokuapp.com/api/v1/drinks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
  }

  render() {
    console.log(this.state.drinks)
    return(
      <React.Fragment>
        { this.state.drinks &&
          <ProjectsList
            projects={this.state.drinks}
          />
        }
        <NewForm
          onNewDrink={this.addNewDrink}
        />
      </React.Fragment>
    )
  }
}

export default ProjectContainer
