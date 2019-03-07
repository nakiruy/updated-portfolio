import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos';

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
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

  render() {
    return (
      <div>
      <Container className="tapcast">
        <Navigation />
        <div data-aos="fade-up">
          <TapcastHeader />
        </div>
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