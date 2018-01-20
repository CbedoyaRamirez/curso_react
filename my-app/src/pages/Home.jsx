import React, { Component } from 'react';
import Footer from '../Components/Footer.jsx';
import Navbar from '../Components/Navbar.jsx';
import Jumbotron from '../Components/Jumbotron.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron  />
        <div className="container">
          <h2>"Memorias en yeso"</h2>
          <p>
            Bienvenido a PaloSanto Memorias en Yeso, nos divertimos (trabajando)
            haciendo esculturas de fundición corporal y regalos hechos a medida. En
            PaloSanto nos enorgullecemos de crear esculturas Lifecast bellísimas y cada una
            de ellas tan única como tú.
            PaloSanto Memorias en Yeso es una empresa joven, de las pocas que
            encontraras en Colombia, pero con un alto sentido de la responsabilidad y el
            servicio, en la que te encontraras con unas manos seguras, capaces y
            afectuosas durante todo el proceso… entregándote no solo una hermosa obra de
            arte para ser apreciada por generaciones, sino también algunos recuerdos
            maravillosos, divertidos y felices.
            Nos ocupamos de la fundición en yeso y otros materiales de todas y cada una de
            las partes del cuerpo. Desde los moldes populares de manos y pies para bebés,
            moldes para grupos familiares, moldes para parejas, yeso para embarazadas,
            bustos, moldes faciales e incluso cuerpos completos. Ofrecemos un servicio de
            fundición en bronce, junto con esculturas de metal fundido en frío, metales
            galvanizados y hermosos moldes de cristal.
            Cuando pienses en perpetuar un recuerdo hermoso o simplemente para divertirte
            un poco, PaloSanto Memorias en Yeso es la mejor opción para crear el regalo
            más precioso que te hayas dado a ti o a tus seres queridos: los recuerdos de hoy
            se convierten en las reliquias del mañana. ¡Toda la vida es hermosa!
          </p>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Home
