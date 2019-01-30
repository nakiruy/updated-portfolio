import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';

import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

import SocialIcons from './SocialIcons';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Container className="copyright">
          {/* <hr></hr> */}
          <Row>
          <Col md="6">
            <SocialIcons />
          </Col>
          <Col md="6">
            <body id="copyright-copy">Built & beautified by Yurika Jacobsson</body>
          </Col>
          </Row>
        </Container> 
    )
  }
}

export default Footer