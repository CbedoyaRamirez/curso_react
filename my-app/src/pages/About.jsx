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
          <h2>Nosotros</h2>

          <p>
            ¿Qué es el Body casting?
            Es el proceso de tomar un molde directamente de cualquier parte del cuerpo para
            producir una escultura.
            *Es también, una experiencia maravillosa encargar una copia de ti o de un ser
            querido. Cualquier cosa, desde cuerpos enteros hasta torsos, rostros, manos y
            pies, etc., puede moldearse como obras de arte hermosas y únicas.
            *Podemos mejorar los moldes para poner de manifiesto tus mejores
            características y suavizar todo lo que no te gusta!
            *Nuestras esculturas son adecuadas tanto para interiores como para exteriores.
            * También ofrecemos una consulta discreta &quot;en casa&quot; y un servicio de copiado de
            cuerpo entero.
          </p>

        </div>
        <Footer />
      </div>
    );
  }
}

export default About
