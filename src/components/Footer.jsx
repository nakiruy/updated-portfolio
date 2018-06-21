import React from 'react';
import { Navbar } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    return (
      <div className="footer">
          <div class="icons">
            <Container>
              <Row>
                <Col sm="4">
                  <a href="mailto:nakiruy@gmail.com">
                      <img className="contact-icon" src={email} alt="Email" />
                  </a></Col>
                  <Col sm="4">
                  <a href="https://www.linkedin.com/in/yurikajacobsson/">
                      <img className="contact-icon" src={linkedin} alt="LinkedIn" />
                  </a></Col>
                  <Col sm="4">
                  <a href="https://www.instagram.com/yurikaffeine/">
                      <img className="contact-icon" src={instagram} alt="Instagram" />
                  </a></Col>
              </Row>
            </Container>
          </div>
          <div id="copyright">copyright © 2018 yurika jacobsson. all rights reserved.</div>
      </div>
    );
  }
}

export default Footer