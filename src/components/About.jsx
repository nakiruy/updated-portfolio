import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import Navigation from './Navigation';
import AboutContent from './AboutContent';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container className="about">
        <Navigation />
        <AboutContent />
      </Container>
    )
  }
}

export default About