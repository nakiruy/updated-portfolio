import React from 'react';

import Navigation from './Navigation';
import { Container } from 'reactstrap';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container className="resume">
        <Navigation />
      </Container>
    )
  }
}

export default Resume