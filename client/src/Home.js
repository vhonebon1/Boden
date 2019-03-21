import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import HomeBlock from './components/homeBlock'
import Modal from './components/modal'
import VideoPlayer from './components/videoPlayer'

class Home extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      projects: this.props.data
    }
  }

  toggleSelectedProject = (id) => {
    const { selectedProject } = this.state
    selectedProject ? this.clearSelectedProject() : this.setSelectedProject(id)
  }

  setSelectedProject = (id) => {
    const { projects } = this.state
    const selectedProject = projects.filter((project) => project.id === id)[0]
    this.setState({selectedProject: selectedProject })
  }

  clearSelectedProject = () => {
    this.setState({ selectedProject: false })
  }

  renderHomePage = () => {
    const { projects } = this.state
    return (
      <React.Fragment>
        <Header />
        { !this.state.selectedProject &&
          <div className='home-project-images'>
            { projects && projects.map((project) =>
              <HomeBlock project={project} onClick={() => this.toggleSelectedProject(project.id)}/>
            )}
          </div>
        }
        { this.state.selectedProject && this.renderSelectedVideo()}
        <Footer />
      </React.Fragment>
    )
  }

  renderSelectedVideo = () => {
    return (
      <Modal
        hideModal={this.clearSelectedProject}
        children
      >
        <VideoPlayer
          videoId={this.state.selectedProject.url}
          onEnded={this.toggleSelectedProject}
        />
      </Modal>
    )
  }

  render () {
    const { selectedProject } = this.state
    return(
      <React.Fragment>
        { this.renderHomePage() }
      </React.Fragment>
    )
  }
}

export default Home
