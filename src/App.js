import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/searchbar/searchbar.component'


const apiKey = " AIzaSyCVnXEUX5Z_D0kj6aH1_Sq2RZSjSgD9m_o";

YTSearch({
  key: apiKey,
  term: 'surfboards'},
  function(data) {
    console.log(data)

})
class App extends Component {
  render() {
    return (
      <Searchbar / >
    );
  }
}

export default App;
