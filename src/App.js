import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navigation from './components/Navigation';
import Greetings from './components/Greetings';
import AllProjects from './components/AllProjects';
import ScrollUpButton from './components/ScrollUpButton';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render() {
    return (
      <div>
        <Container className="header" fluid>
          <Navigation />
          <div className="main" data-aos="fade-up">
            <Greetings />
          </div>
        </Container>
        <Container className="body" fluid>
          <AllProjects />
        </Container>
        <Container className="footer" fluid>
          <ScrollUpButton />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App
