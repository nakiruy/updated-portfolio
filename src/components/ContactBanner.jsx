import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import AOS from 'aos';

class ContactBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

  render() {
    return (
      <Jumbotron className="contact">
          <Container className="contact-container">
            <Row>
              <Col lg="9">
                <h1 className="contact-copy">Want to learn more? Download my resume.</h1>
              </Col>
              <Col lg="3">
                <a href="https://drive.google.com/file/d/1ZT7E42VgzeEiyoBLHUx71oV7IS59dc-4/" className="btn" id="contact-btn">Download Resume</a>
              </Col>
            </Row>
          </Container>
      </Jumbotron>
    )
  }
}

export default ContactBanner