import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="contact-bar">
        <Container>
            <Row>
                <Col sm="4">
                <a href="https://github.com/nakiruy">
                    <img className="contact-icon" src={github} alt="GitHub" />
                </a></Col>
                <Col sm="4">
                <a href="https://www.linkedin.com/in/yurikajacobsson/">
                    <img className="contact-icon" src={linkedin} alt="LinkedIn" />
                </a></Col>
                <Col sm="4">
                <a href="mailto:nakiruy@gmail.com">
                    <img className="contact-icon" src={email} alt="Email" />
                </a></Col>
            </Row>
          </Container>
      </div>
    )
  }
}

export default Contact