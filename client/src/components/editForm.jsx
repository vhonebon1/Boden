import React from 'react'

class EditProjectForm extends React.Component {

  constructor(props) {
    super(props)
    const { id, title, description, url, large } = this.props.project
    this.state = {
      id: id,
      title: title,
      description: description,
      url: url,
      large: large
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  updateCheckboxValue() {
    this.setState({ large: !this.state.large })
  }

  render() {
    const { id, title, description, url, large } = this.state

    return (
      <div className="edit-form-wrapper">
        <form onSubmit={(e) => this.props.editProject(id, title, description, url, large)}>
          <label>
            Title
          </label>
          <input
            name="title"
            type="text"
            placeholder="Title required"
            onChange={this.handleChange}
            value={title}
          />
          <label>
            Description
          </label>
          <input
            name="description"
            type="text"
            placeholder="Description required"
            onChange={this.handleChange}
            value={description}
          />
          <label>
            YouTube id
            <a className="helper-link" href="https://docs.joeworkman.net/rapidweaver/stacks/youtube/video-id">Wtf is this?</a>
          </label>
          <input
            name="url"
            type="text"
            placeholder="Url required"
            onChange={this.handleChange}
            value={url}
          />
          <label>Make large tile?</label>
          <input
            type="checkbox"
            name="large"
            checked={large}
            onClick={() => this.updateCheckboxValue()}>
          </input>
          <button className="action-button">Edit project</button>
        </form>
      </div>
    )
  }
}

export default EditProjectForm
