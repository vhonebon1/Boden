import React from 'react'
import Header from './components/header'
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
    console.log(selectedProject)
  }

  clearSelectedProject = () => {
    this.setState({selectedProject: false})
    console.log('cleared')
  }

  renderAllVideos = () => {
    const { projects } = this.state
    return (
      <React.Fragment>
        <Header />
        <div className='home-project-images'>
          { projects && projects.map((project) =>
            <HomeBlock project={project} onClick={() => this.toggleSelectedProject(project.id)}/>
          )}
        </div>
      </React.Fragment>
    )
  }

  renderSelectedVideo = () => {
    return (
      <Modal
        hideModal={this.toggleSelectedProject}
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
      <div>
        { selectedProject ? this.renderSelectedVideo() : this.renderAllVideos() }
      </div>
    )
  }
}

export default Home
