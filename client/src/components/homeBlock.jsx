import React from 'react'

const HomeBlock = ({ project, onClick }) =>
  <div onClick={() => onClick(project.id)}>
    <img className="admin-image" alt="" src={`http://img.youtube.com/vi/${project.url}/0.jpg`} />
  </div>

export default HomeBlock
