import React, { Component } from 'react';
import './CSS/App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Contactos from './pages/Contactos';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Route exact path="/"  component={About} /> 
            <Route path="/about"  component={About} /> 
            <Route path="/contactos"  component={Contactos} /> 
        </div>
      </Router>
    );
  }
}

export default App;
