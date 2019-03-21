import React from 'react'

const HomeBlock = ({ project, onClick }) =>
  <div className="home-image"onClick={() => onClick(project.id)}>
    <img alt="" src={`http://img.youtube.com/vi/${project.url}/0.jpg`} />
  </div>

export default HomeBlock
