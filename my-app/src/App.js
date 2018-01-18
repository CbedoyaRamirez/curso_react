import React, { Component } from 'react';
import './CSS/App.css';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <div>
            <Header />
          </div>
        </p>      
      </div>
    );
  }
}

export default App;
