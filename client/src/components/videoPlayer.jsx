import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ videoId, onEnded }) =>
  <ReactPlayer
    url={`https://www.youtube.com/watch?v=${videoId}&start_radio=1&list=RDDDWKuo3gXMQ`}
    playing
    onEnded={onEnded}
  />

export default VideoPlayer
