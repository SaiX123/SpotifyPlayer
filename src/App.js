import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MusicPlayer from './components/MusicPlayer'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <body>
          <script src="https://sdk.scdn.co/spotify-player.js"></script>

          </body>
        </header>
      </div>
    );
  }
}

export default App;
