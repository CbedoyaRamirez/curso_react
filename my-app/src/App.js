import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Logo from './Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <div>
            <Header />
          </div>
        </p>      
        <div className="App-intro">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
