import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <div>
            <Header />
          </div>
        </p>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
