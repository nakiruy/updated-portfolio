import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';

import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

class ContactBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
                <a href="https://drive.google.com/file/d/1eKN9C3ctdTQ1kI03yxyHtY6oJ85POLY1/" className="btn" id="contact-btn">Download Resume</a>
              </Col>
            </Row>
          </Container>
      </Jumbotron>
    )
  }
}

export default ContactBanner