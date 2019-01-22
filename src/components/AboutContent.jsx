import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Media } from 'reactstrap';

import AboutBanner from './AboutBanner';
import ContactBanner from './ContactBanner';
import AboutPhotos from './AboutPhotos';

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
            <h1 className="headline" id="about-header"><span id="about-fact">Fun fact:</span> I like eating avocados with ketchup<span id="period">.</span></h1>
          </Col>
          <h6 className="about-desc">Hello there! I’m Yurika (pronounced like Eureka) Jacobsson. Currently, I am a technical project manager/designer at Tapcast, a marketing intelligence startup located in San Francisco Bay Area. Previously, I was a UI/UX design intern at Moxtra. 
            Born in Tokyo and raised in Silicon Valley, I always loved to design, create, and build anything that leverages technology. I truly believe design can help develop a successful business and product.
            When I’m not designing or developing, you can find me perfecting the art of cold brew, counting down for the next limited edition sneakers (yes, I’m a sneaker head), and if budget allows, traveling to new locations.
            Whether you’d like to talk about design, development, or avocados - I’m always open to chat. Feel to do so below!</h6>
          <AboutPhotos />
          <ContactBanner /> 
      </Container>
    )
  }
}

export default AboutContent