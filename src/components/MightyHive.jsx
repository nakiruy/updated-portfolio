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
                    As a frontend engineer with design skills and experience in the advertising and marketing space, I am confident that I am well-positioned to contribute to your account management operations team with my technical skills.
                    In fact, <span class="chunky-underline">I currently work alongside with my company's ad operations and account management team by implementing necessary analytics on client's websites</span> and as a PM, analyzing user funnel data is of a daily occurrence. I have dealt with integration numerous times in my current position incuding Facebook pixel, Google Tag Manager, etc.<br></br><br></br>
                    Aside from my experience and skills as outlined in my <a href="https://drive.google.com/file/d/1SBTaARz2vp_wtA2vxxLaTJL4y-ugLflG/"><span id="getintouch">resume</span></a>, what my resume cannot tell you is that I am a passionate, organized, and motivated individual. I’m sure that my background in project management, designing, and development will provide an edge in creating meaningful results at MightyHive as a Junior Front-End Developer.
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