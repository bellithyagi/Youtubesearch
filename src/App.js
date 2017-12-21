import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/searchbar/searchbar.component';
import Videolist from './components/videolist/videolist.component';



class App extends Component {
  constructor(props) {
    super(props);
    const apiKey = " AIzaSyCVnXEUX5Z_D0kj6aH1_Sq2RZSjSgD9m_o";
    this.state = {
      videos: []
    }
    YTSearch({
        key: apiKey,
        term: 'surfboards'
      },
      (videos) => {
        console.log(videos);
        this.setState({
          videos
        })
      })
  }
  render() {
    return ( <div>
      <Searchbar / >
      <Videolist videos = {this.state.videos}></Videolist>
      </div>
    );
  }
}

export default App;
