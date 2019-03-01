import React from 'react';

import Navigation from './Navigation';
import { Container, Row, Col } from 'reactstrap';

import MoxtraHeader from './MoxtraHeader';
import MoxtraContent from './MoxtraContent';
import ProjectNav from './ProjectNav';
import ScrollUpButton from './ScrollUpButton';
import Footer from './Footer';


class Moxtra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
    <div>
      <Container className="moxtra">
        <Navigation />
        <MoxtraHeader />
        <MoxtraContent />
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

export default Moxtra