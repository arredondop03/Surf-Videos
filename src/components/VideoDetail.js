import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'


const VideoDetail = (props) => {
  const {item} = props;
  const goTo = item.id.videoId;
  
  return(
    <div>
      <div className="video-card">
      <div>
        <img alt="" src={item.snippet.thumbnails.medium.url}/>
      </div>
      <div className="right-video-card">
        <h2>{item.snippet.title}</h2>
        <p>{item.snippet.description}</p>
        <Link className='link-to-player' to={{pathname: `${goTo}`, state: {item} }}> Play Video</Link>
      </div>
      </div>
    </div>
  )
}

export default VideoDetail