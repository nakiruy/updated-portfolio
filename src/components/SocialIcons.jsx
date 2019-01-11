import React from 'react';
import { Navbar } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';

class SocialIcons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    return (
      <div className="social-icons">
          <div className="icons">
            <Container>
              <Col xs="3">
                  <a href="mailto:nakiruy@gmail.com">
                      <img className="contact-icon" src={email} alt="Email" />
                  </a>
                  <a href="https://www.linkedin.com/in/yurikajacobsson/">
                      <img className="contact-icon" src={linkedin} alt="LinkedIn" />
                  </a>
                  <a href="https://www.instagram.com/yurikaffeine/">
                      <img className="contact-icon" src={instagram} alt="Instagram" />
                  </a>
                </Col>
            </Container>
          </div>
      </div>
    );
  }
}

export default SocialIcons