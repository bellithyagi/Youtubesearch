import React, {Component} from 'react';

class Searchbar extends Component {

constructor(){
  super();
  this.state = '';
}

getInput(event){
  var inputboxText = event.target.value;
  document.querySelector('.demo').innerText = inputboxText;
}

  render() {
    return (
      <div>
      <input className="searchinput" type = "text" onChange={this.getInput}/ >
      <p className="demo"></p>
      </div>
    )
  }

}

export default Searchbar;
