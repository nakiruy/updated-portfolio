import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

import Navigation from './components/Navigation';
import Greetings from './components/Greetings';
import AllProjects from './components/AllProjects';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Container className="header" fluid>
          <Navigation />
          <div className="main">
            <Greetings />
          </div>
        </Container>
        <Container className="body" fluid>
          <AllProjects />
        </Container>
        <Container className="footer" fluid>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App
