import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Badge } from 'reactstrap';

import AboutBanner from './AboutBanner';

class AboutContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
          <Col md="9" className="greetings" id="about-greetings">
            <h1 className="headline">Fun fact: I like eating avocados with ketchup.</h1>
            <h6 className="about-desc">Hi there! I’m Yurika (pronounced like Eureka) Jacobsson. Currently, I am a technical project manager/designer at Tapcast, a marketing intelligence startup located in San Francisco Bay Area. Previously, I was a UI/UX design intern at Moxtra. 
            Born in Tokyo and raised in Silicon Valley, I always loved to design, create, and build anything that leverages technology. I truly believe design can help develop a successful business and product.
            When I’m not designing or developing, you can find me perfecting the art of cold brew, counting down for the next limited edition sneakers (yes, I’m a sneaker head), and if budget allows, traveling to new locations.
            Whether you’d like to talk about design, development, or avocados - I’m always open to chat. Feel free to get in touch!</h6>
            <AboutBanner />
          </Col>
      </Container>
    )
  }
}

export default AboutContent