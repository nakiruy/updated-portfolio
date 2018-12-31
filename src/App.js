import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

import Navigation from './components/Navigation';
import Greetings from './components/Greetings';
import AllProjects from './components/AllProjects';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Container className="app">
        <Navigation />
        <div className="main">
          <Greetings />
        </div>
        <div className="body">
          <AllProjects />
          {/* <Footer /> */}
        </div>
      </Container>
    );
  }
}

export default App
