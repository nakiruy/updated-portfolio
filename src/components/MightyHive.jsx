import React from 'react';
import { Container, Col } from 'reactstrap';
import AOS from 'aos';

import Navigation from './Navigation';
import EmailBanner from './EmailBanner';
import Footer from './Footer';

class MightyHive extends React.Component {
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
          <div className="main">
            <Container>
              <Col md="9" className="greetings">
                <h1 className="headline" data-aos="fade-up">Welcome to my online cover letter, <span id="cover-letter-name">MightyHive</span>.</h1>
                <div data-aos="fade-up">
                  <h6 className="secondary-header" data-aos="fade-up">Why hire me?</h6>
                  <h6 className="about-desc" id="cover-letter-desc">
                    As a frontend engineer with design skills and experience in the advertising & marketing space, I am well-positioned to contribute to your account management operations team with my technical skills.
                    In fact, <span class="chunky-underline">I currently work alongside with my company's ad operations and account management team by implementing necessary analytics on clients' websites</span> and as a PM, analyzing user funnel data is of a daily occurrence. I have dealt with integration numerous times in my current position incuding Facebook Pixel, Google Tag Manager, Segment, etc.<br></br><br></br>
                    Aside from my experience and skills as outlined in my <a href="https://drive.google.com/file/d/10xLHhQ4QMzcSZYSvPBMBEuELecberQbz/"><span id="getintouch">resume</span></a>, what it cannot tell you is that I am a organized, motivated, and passionate individual. My background in multiple disciplines and industries empowers me as an individual contributor in collaboration, creation, and data-driven results.
                  </h6>
                </div>
              </Col>
              <Col>
                <EmailBanner />
              </Col>
              <Col md="9" className="thank-you">
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

export default MightyHive