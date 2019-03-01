import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import Navigation from './Navigation';
import TapcastHeader from './TapcastHeader';
import TapcastContent from './TapcastContent';
import ProjectNav from './ProjectNav';
import ScrollUpButton from './ScrollUpButton';
import Footer from './Footer';

class Tapcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
      <Container className="tapcast">
        <Navigation />
        <TapcastHeader />
        <TapcastContent />
      </Container>
      <Container className="project-nav-wrapper" fluid>
        <ProjectNav />
      </Container>
      <Container className="footer" fluid>
        <ScrollUpButton />
        <Footer />
      </Container>
    </div>
    )
  }
}

export default Tapcast