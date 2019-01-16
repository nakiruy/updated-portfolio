import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';

import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Jumbotron className="contact">
          <Container className="contact-container">
            <Row>
              <Col lg="10">
                <h1 className="contact-copy">Interested in working together? Get in touch.</h1>
              </Col>
              <Col lg="2">
                <a href="mailto:nakiruy@gmail.com" className="btn" id="contact-btn"><div id="getintouch">Contact Me</div></a>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default Contact