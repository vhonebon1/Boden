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
        <div className='home-project-images'>
          { projects && projects.map((project) =>
            <img className="admin-image" alt="" src={`http://img.youtube.com/vi/${project.url}/0.jpg`} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
