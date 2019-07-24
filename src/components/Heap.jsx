import React from 'react';
import { Container, Col } from 'reactstrap';
import AOS from 'aos';

import Navigation from './Navigation';
import EmailBanner from './EmailBanner';
import Footer from './Footer';

class Heap extends React.Component {
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
                <h1 className="headline" data-aos="fade-up">Welcome to my online cover letter, <span id="cover-letter-name">Heap</span>.</h1>
                <div data-aos="fade-up">
                  <h6 className="secondary-header" data-aos="fade-up">Why hire me?</h6>
                  <h6 className="about-desc" id="cover-letter-desc">
                    Because I have the combination of skills and experience that sets me apart from other candidates and I am confident that I can deliver exceptional results to your company.
                    For example, since I am a <span className="chunky-underline">product designer with developer skills</span>, I have experience in using Sketch, Photoshop, Invision, and proficient with HTML/CSS/JavaScript (in fact, this page is built in React!). 
                    I have built landing pages, designed mockups, developed prototypes, and managed a team of engineers. I am also comfortable with <span className="chunky-underline">wearing multiple hats and ambiguity</span> due to my previous experiences in working at early-stage startups.
                    Aside from experiences and skills as outlined in my <a href="https://drive.google.com/file/d/10xLHhQ4QMzcSZYSvPBMBEuELecberQbz/"><span id="getintouch">resume</span></a>, what it cannot tell you is that I am an organized, motivated, passionate, and team-oriented individual. I would love to be part of a team that is making a difference to a crucial part of every business - analytics!<br></br><br></br>
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

export default Heap