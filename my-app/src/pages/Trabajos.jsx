import React, { Component } from 'react';
import Footer from '../Components/Footer.jsx';
import Navbar from '../Components/Navbar.jsx';
import Jumbotron from '../Components/Jumbotron.jsx';
import './Trabajos.css';



class Trabajos extends Component {
  constructor() {
    super();

    this.state = {
      products: [
        { id: 1, name: "Hipster Ultimate", price: 299, image: "https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/26758152_143347823016393_1784055835882369617_o.jpg?oh=cf8831e46d66c994c8be16a647dde239&oe=5AE311EF" },
        { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
        { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
        { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
        { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
        { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      ]
    }
  }


  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <ul className="galeria">
          {this.state.products.map(product =>
            <li>
              <img src={product.image} alt={product.name} />
            </li>
          )}
        </ul>
        <Footer />
      </div>
    );
  }
}

export default Trabajos
