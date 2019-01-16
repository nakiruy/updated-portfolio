import React from 'react';

import Navigation from './Navigation';
import AboutContent from './AboutContent';
import { Container, Row, Col } from 'reactstrap';

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