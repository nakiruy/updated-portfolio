import React from 'react';

import Navigation from './Navigation';
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
      </Container>
    )
  }
}

export default About