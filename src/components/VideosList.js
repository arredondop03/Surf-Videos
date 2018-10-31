import React, {Component} from 'react'
import axios from 'axios'
import VideoDetail from './VideoDetail'


class VideosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      search: '',
      nextPageToken:'',
      prevPageToken:''  
    }
  }

  getNextFive(token){
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDbSEZctcb9KGDD-HErqpeSGj3D2efmcW4&part=snippet&type=video&q=surf&pageToken=${token}`)
    .then(response => {
      this.setState({
        items:response.data.items,
        nextPageToken: response.data.nextPageToken,
        prevPageToken: response.data.prevPageToken
      })
    })
  }

  getPreviousFive(token){
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDbSEZctcb9KGDD-HErqpeSGj3D2efmcW4&part=snippet&type=video&q=surf&pageToken=${token}`)
    .then(response => {
      this.setState({
        items:response.data.items,
        nextPageToken: response.data.nextPageToken,
        prevPageToken: response.data.prevPageToken
      })
    })
  }

  renderNextFive = () => {
    this.getNextFive(this.state.nextPageToken)
  }

  renderPreviousFive = () => {
    this.getPreviousFive(this.state.prevPageToken)
  }

  componentDidMount(){
    axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDbSEZctcb9KGDD-HErqpeSGj3D2efmcW4&part=snippet&type=video&q=surf')
    .then( res => this.setState({
      items: res.data.items,
      nextPageToken: res.data.nextPageToken
      })
    )
  }

  updateSearch(event){
    this.setState({search: event.target.value})
  }

  render() {
    let filteredVideos = this.state.items.filter(
      (item) => {
        return item.snippet.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )
    return (
      <div>
        <h1 className="page-title">No waves, no glory</h1>
        <div className="input-container">
          <input  className="search-bar" 
                  type="text" 
                  value={this.state.search} 
                  onChange={this.updateSearch.bind(this)}
          />
        </div>
        <ul>
          {filteredVideos.map(item =>
          <VideoDetail key={item.id.videoId} item={item} /> 
          )}
        </ul>
        <div className="buttons-container">
          {this.state.prevPageToken ? <button className="next-and-back-buttons" onClick={this.renderPreviousFive} >Back</button> : null}
          <button className="next-and-back-buttons" onClick={this.renderNextFive} >Next</button>
        </div>
      </div>
    );
  }
}

export default VideosList
