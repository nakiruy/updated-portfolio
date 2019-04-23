import React from 'react';
import { Container, Col } from 'reactstrap';
import AOS from 'aos';

import Navigation from './Navigation';
import Footer from './Footer';

class CoverLetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount(){
    window.scrollTo(0, 0);
    AOS.init({
      duration : 2000
    })
  }

  render() {
    return (
      <div>
      <Navigation />
      <Container>
        <Col md="9" className="greetings">
          <h1 className="headline" data-aos="fade-up">Welcome to my interactive cover letter, <span id="cover-letter-name">[NAME]</span>.</h1>
          <div data-aos="fade-up">
            <h6 className="secondary-header" data-aos="fade-up">Why hire me?</h6>
            <h6 className="about-desc" id="cover-letter-desc">
              Aside from her experience and skills, 
            </h6>
          </div>
          <h6 className="secondary-header">testimonials</h6>
          <h1 className="headline" id="not-header">Thank you for stopping by<span id="period">.</span></h1>
        </Col>
      </Container>
      <Container className="footer" fluid>
        <Footer />
      </Container>
      </div>
    )
  }
}

export default CoverLetter