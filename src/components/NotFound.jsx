import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import Footer from './Footer';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
      <Container className="not-found">
        <Navigation />
        <h1 className="headline" id="not-header"><span id="about-fact">404</span> : Page Not Found.<span id="period">.</span></h1>
        <Link exact to="/"><a className="btn">Go Home</a></Link>
      </Container>
      <Container className="footer" fluid>
        <Footer />
      </Container>
    </div>
    )
  }
}

export default NotFound