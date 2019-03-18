import React from 'react'
import NewForm from './newProjectForm'
import ProjectsList from './ProjectsList'

class ProjectsContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      drinks: this.props.data
    }
  }

  addNewDrink = (title) => {
    let body = JSON.stringify({drink: {title}})
    let that = this
    fetch('https://gentle-earth-22725.herokuapp.com/api/v1/drinks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => this.setState({drinks: {...this.state.drinks, ...response.data}}))
  }



  render() {
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

export default ProjectsContainer
