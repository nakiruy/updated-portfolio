import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Media } from 'reactstrap';

import AboutBanner from './AboutBanner';
import ContactBanner from './ContactBanner';
import AboutPhotos from './AboutPhotos';
import AboutPhotosCarousel from './AboutPhotosCarousel';

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
            <h6 className="secondary-header">about</h6>
            <h6 className="about-desc">
            Hello there! I’m <span className="chunky-underline">Yurika Jacobsson</span>. Currently, I am a <span className="chunky-underline">technical project manager/designer</span> at Tapcast, a marketing intelligence startup located in San Francisco Bay Area. Previously, I was a UI/UX design intern at Moxtra.
            </h6>
            <h6 className="about-desc">
            Born in Tokyo and raised in Silicon Valley, I always drew from my environment to motivate myself <span className="chunky-underline">to design, create, and build</span>. I truly believe design can help develop a successful business and product.
            </h6>
            <h6 className="about-desc">
            When I’m not designing or developing, you can find me <span className="chunky-underline">perfecting the art of cold brew</span>, counting down for the next limited edition <span className="chunky-underline">sneakers (yes, I’m a sneaker head)</span>, and if budget allows, <span className="chunky-underline">traveling to new locations</span>.
            </h6>
            <h6 className="about-desc">
            Whether you’d like to talk about design, development, or avocados - I’m always open to chat. <a href="mailto:nakiruy@gmail.com"><span id="getintouch">Get in touch!</span></a>
            </h6>
          </Col>
          <h6 className="secondary-header" id="insta-header">instagram feed</h6>
          <AboutPhotos />
          <AboutPhotosCarousel />
          <div className="insta-btn-wrapper">
            <a href="https://www.instagram.com/yurikaffeine/" className="btn" id="insta-btn">follow me on instagram</a>
          </div>
          <ContactBanner />
      </Container>
    )
  }
}

export default AboutContent