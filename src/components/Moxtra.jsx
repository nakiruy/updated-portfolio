import React from 'react';

import { Container } from 'reactstrap';
import AOS from 'aos';

import Navigation from './Navigation';
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
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
    window.scrollTo(0, 0);
  }

  render() {
    return (
    <div>
      <Container className="moxtra">
        <Navigation />
        <div data-aos="fade-up">
          <MoxtraHeader />
        </div>
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