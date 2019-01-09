import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

import Navigation from './components/Navigation';
import Greetings from './components/Greetings';
import AllProjects from './components/AllProjects';
import SocialIcons from './components/SocialIcons';

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
        <SocialIcons />
      </div>
    );
  }
}

export default App
