import React, { Component } from 'react';
import Footer from '../Components/Footer.jsx';
import Navbar from '../Components/Navbar.jsx';
import Jumbotron from '../Components/Jumbotron.jsx';

class Trabajos extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className="container">
            <h2>Trabajos</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Trabajos
