import React from 'react'

const NewProjectForm = ({onNewproject = f => f}) => {
  let title, description, url
  const submit = e => {
    e.preventDefault()
    onNewproject(title.value, description.value, url.value)
    title.value = ''
    description.value =''
    url.value = ''
    title.focus()
  }

  return (
    <div className="project-wrapper">
      <div>Once a YouTube id is added the image will be here.</div>
      <form className="new-form-wrapper" onSubmit={submit}>
        <input
          ref={input => title = input}
          type="text"
          placeholder="Title..."
          required
        />
        <input
          ref={input => description = input}
          type="text"
          placeholder="Description..."
          required
        />
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
