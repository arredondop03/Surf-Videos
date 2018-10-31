import React, {Component} from 'react'
import YouTube from 'react-youtube';

 
class VideoPlayer extends Component {
  
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    
    
 const { item } = this.props.location.state;
 
    return (
      <div>
        <div className="video" >
          <YouTube
            containerClassName='iFrame'
            videoId={this.props.match.params.id}
            opts={opts}
            onReady={this._onReady}
          />
        </div>
        <div className="video-player-information">
          <h2>{item.snippet.title}</h2>
          <p>{item.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoPlayer
