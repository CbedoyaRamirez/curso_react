import React, { Component } from 'react';
import Footer from '../Components/Footer.jsx';
import Navbar from '../Components/Navbar.jsx';
import Jumbotron from '../Components/Jumbotron.jsx';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className="container">
          <h2>Contactenos</h2>

        </div>
        <Footer />
      </div>
    );
  }
}

export default About
