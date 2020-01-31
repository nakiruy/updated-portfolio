import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';

class AboutBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Jumbotron className="about">
          <Container className="about-container">
            <Row>
              <Col lg="10">
                <h1 className="about-copy">Want to learn more?</h1>
              </Col>
              <Col lg="2">
                <a href="https://drive.google.com/file/d/1ZT7E42VgzeEiyoBLHUx71oV7IS59dc-4/" className="btn" id="contact-btn"><div id="getintouch">Download Resume</div></a>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default AboutBanner