import React from 'react';

import Navigation from './Navigation';
import { Container, Row, Col } from 'reactstrap';

class Moxtra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container className="moxtra">
        <Navigation />
      </Container>
    )
  }
}

export default Moxtra