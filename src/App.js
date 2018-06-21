import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

import Navigation from './components/Navigation';
import Greetings from './components/Greetings';
import Footer from './components/Footer';
 
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="main">
          <Navigation />
          <Greetings />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App
