import React, { Component } from 'react';
import { render } from 'react-dom';
import TopBar from './TopBar';
import ProductList from './ProductList';
import{Link, BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './style.css';

const products = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  

  render() {
    return (
      <Router> 
      <div>
          <TopBar></TopBar>
          <div className="container">
            <ProductList products = {products}></ProductList>
          </div>
          
        </div>
      </Router>
        
      
    );
  }
}

export default App

render(<App />, document.getElementById('root'));

