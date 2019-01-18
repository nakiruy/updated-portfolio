import React from 'react';

import Navigation from './Navigation';
import { Container, Row, Col } from 'reactstrap';

import MoxtraContent from './MoxtraContent';


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
        <MoxtraContent />
      </Container>
    )
  }
}

export default Moxtra