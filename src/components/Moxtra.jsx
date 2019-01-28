import React from 'react';

import Navigation from './Navigation';
import { Container, Row, Col } from 'reactstrap';

import MoxtraHeader from './MoxtraHeader';
import MoxtraContent from './MoxtraContent';
import Footer from './Footer';


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
        <MoxtraHeader />
        <MoxtraContent />
        <Footer />
      </Container>
    )
  }
}

export default Moxtra