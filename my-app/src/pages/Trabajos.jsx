import React, { Component } from 'react';
import Footer from '../Components/Footer.jsx';
import Navbar from '../Components/Navbar.jsx';
import Jumbotron from '../Components/Jumbotron.jsx';

class Trabajos extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Trabajos" subtitle="This page is all about me and my work!"/>
        <div className="container">
            <h2>Trabajos</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Trabajos
