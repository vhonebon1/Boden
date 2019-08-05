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
  }

  clearSelectedProject = () => {
    this.setState({ selectedProject: false })
  }

  renderBlock(largeValue) {
    return (
      <div className="large-block">
        <HomeBlock
          project={this.state.selectedProject}
          large={true}
          onClick={() => this.toggleSelectedProject(this.state.selectedProject.id)}
        />
    </div>
    )
  }

  renderLargeBlock = (project) => {
    return(
      <HomeBlock
        project={project}
        large={true}
        onClick={() => this.toggleSelectedProject(project.id)}
      />
    )
  }

  renderHomePage = () => {
    const { projects } = this.state
    const largeBlock = projects.filter((project) => project.large)
    const smallBlocks = projects.filter((project) => !project.large)
    const hasLargeBlock = largeBlock.length > 0

    return (
      <div className="main">
        <Header />
        { !this.state.selectedProject &&
          <div className='home-project-images'>
            { largeBlock && largeBlock.map((project) =>
              <HomeBlock
                project={project}
                large={true}
                onClick={() => this.toggleSelectedProject(project.id)}
              />
            )}
            <div className="small-blocks">
              { smallBlocks && smallBlocks.map((project) =>
                <HomeBlock
                  project={project}
                  large={false}
                  onClick={() => this.toggleSelectedProject(project.id)}
                />
              )}
            </div>
          </div>
        }
        { this.state.selectedProject && this.renderSelectedVideo()}
      </div>
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
