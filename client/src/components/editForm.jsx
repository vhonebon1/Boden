import React from 'react'

class EditProjectForm extends React.Component {

  constructor(props) {
    super(props)
    const { id, title, description, url } = this.props.project
    this.state = {
      id: id,
      title: title,
      description: description,
      url: url
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { id, title, description, url } = this.state

    return (
      <div className="edit-form-wrapper">
        <form onSubmit={(e) => this.props.editProject(id, title, description, url)}>
          <input
            name="title"
            type="text"
            placeholder="Title required"
            onChange={this.handleChange}
            value={title}
          />
          <input
            name="description"
            type="text"
            placeholder="Description required"
            onChange={this.handleChange}
            value={description}
          />
          <input
            name="url"
            type="text"
            placeholder="Url required"
            onChange={this.handleChange}
            value={url}
          />
          <button className="action-button">Edit project</button>
        </form>
      </div>
    )
  }
}

export default EditProjectForm
