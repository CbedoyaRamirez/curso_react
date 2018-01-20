import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo.jsx';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md">
        <button className="navbar-toggler navbar-toggler-right" type="button" 
                data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" 
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <Logo />
          <Link className="navbar-brand" to="/">PaloSanto "Memorias en yeso"</Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contactenos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trabajos">Trabajos</Link>
              </li>              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
