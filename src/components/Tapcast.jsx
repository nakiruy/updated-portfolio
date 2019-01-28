import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import Navigation from './Navigation';
import TapcastHeader from './TapcastHeader';
import TapcastContent from './TapcastContent';
import Footer from './Footer';

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