import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.viewSubmission=this.viewSubmission.bind(this);
   }
   viewSubmission (event) {
    
    var roomName = document.querySelector('#room-name-input').value;
            window.location.pathname = '/chat/' + roomName + '/';
            alert(window.location.pathname)
     }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        What chat room would you like to enter?<br/>
        <input id="room-name-input" type="text" size="50"/><br/>
        <input id="room-name-submit" type="button" value="Enter" onClick={this.viewSubmission}/>
        </header>
      </div>
    );
  }
}

export default App;
