import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import AOS from 'aos';

class EmailBanner extends React.Component {
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
                <h1 className="contact-copy" id="email-copy">Like what you read? Let's chat!</h1>
              </Col>
              <Col lg="3">
                <a href="mailto:nakiruy@gmail.com" className="btn" id="contact-btn">Email Yurika</a>
              </Col>
            </Row>
          </Container>
      </Jumbotron>
    )
  }
}

export default EmailBanner