import React, {
  Component
} from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/searchbar/searchbar.component';
import Videolist from './components/videolist/videolist.component';
import Videocontent from './components/videocontent/videocontent.component';



class App extends Component {
  constructor(props) {
    super(props);
    const apiKey = "AIzaSyCVnXEUX5Z_D0kj6aH1_Sq2RZSjSgD9m_o";
    this.state = {
      videos: [],
      selectedVideo : null
    }
    YTSearch({
        key: apiKey,
        term: 'surfboards'
      },
      (videos) => {
        this.setState({
          videos
        })
      })
  }
  render() {
    return ( <div>
      <Searchbar / >
      <Videocontent video={this.state.selectedVideo}/>
      <Videolist videos = {this.state.videos} onVideoselect={selectedVideo => this.setState({selectedVideo})}></Videolist>
      </div>
    );
  }
}

export default App;
