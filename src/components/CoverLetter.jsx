import React from 'react';
import { Container, Col } from 'reactstrap';
import AOS from 'aos';

import Navigation from './Navigation';
import Testimonials from './Testimonials';
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
      <Container className="header" fluid>
          <Navigation />
          <div className="main" data-aos="fade-up">
            <Container>
              <Col md="9" className="greetings">
                <h1 className="headline">Welcome to my interactive cover letter, <span id="cover-letter-name">[NAME]</span>.</h1>
                <div data-aos="fade-up">
                  <h6 className="secondary-header" data-aos="fade-up">Why hire me?</h6>
                  <h6 className="about-desc" id="cover-letter-desc">
                    With over [#] years in the tech industry, I’m well-positioned to contribute X, Y, and Z skills [that you care about] to your team. And aside from my experience and skills as outlined in my <a href="https://drive.google.com/file/d/1SBTaARz2vp_wtA2vxxLaTJL4y-ugLflG/"><span id="getintouch">resume</span></a>, 
                    https://medium.com/@janetktaylor/your-cover-letter-should-be-about-me-not-you-3f9c0c21773f
                  </h6>
                  <h6 className="secondary-header">testimonials</h6>
                </div>
              </Col>
              <Col>
                <Testimonials />
              </Col>
              <Col md="9" className="greetings">
                <h1 className="headline" id="not-header">Thank you for your consideration<span id="period">.</span></h1>
              </Col>
            </Container>
          </div>
        </Container>
      <Container className="footer" fluid>
        <Footer />
      </Container>
      </div>
    )
  }
}

export default CoverLetter