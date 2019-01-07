import React from 'react';

import Navigation from './Navigation';
import { Container, Row, Col } from 'reactstrap';

class Tapcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container className="tapcast">
        <Navigation />
      </Container>
    )
  }
}

export default Tapcast