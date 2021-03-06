import React from 'react'

const NewProjectForm = ({onNewProject = f => f}) => {
  let title, description, url
  const submit = e => {
    e.preventDefault()
    onNewProject(title.value, description.value, url.value)
    title.value = ''
    description.value =''
    url.value = ''
    title.focus()
  }

  return (
    <div className="project-wrapper">
      <div>Once a YouTube id is added the image will be here.</div>
      <form className="new-form-wrapper" onSubmit={submit}>
        <label>
          Title
        </label>
        <input
          ref={input => title = input}
          type="text"
          placeholder="Title..."
          required
        />
        <label>
          Description
        </label>
        <input
          ref={input => description = input}
          type="text"
          placeholder="Description..."
          required
        />
        <label>
          YouTube id
          <a className="helper-link" href="https://docs.joeworkman.net/rapidweaver/stacks/youtube/video-id">Wtf is a YouTube id?</a>
        </label>
        <input
          ref={input => url = input}
          type="text"
          placeholder="Url..."
          required
        />
      <button className="action-button">Add new project</button>
      </form>
    </div>
  )
}

export default NewProjectForm
