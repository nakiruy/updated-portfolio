import React from 'react';

import { Container } from 'reactstrap';

import Navigation from './Navigation';
import AboutContent from './AboutContent';
import ScrollUpButton from './ScrollUpButton';
import Footer from './Footer';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
      <Container className="about">
        <Navigation />
        <AboutContent />
      </Container>
      <Container className="footer" fluid>
        <ScrollUpButton />
        <Footer />
      </Container>
    </div>
    )
  }
}

export default About