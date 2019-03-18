import React from 'react'
import NewForm from './newProjectForm'
import axios from 'axios'

class ProjectContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      drinks: this.props.drinks
    }
    this.addNewDrink = this.addNewDrink.bind(this)
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
    return(
      <NewForm
        onNewDrink={this.addNewDrink}
      />
    )
  }
}

export default ProjectContainer
