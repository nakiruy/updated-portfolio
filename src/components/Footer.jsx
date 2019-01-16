import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';

import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Container className="copyright" fluid>
          <Col>
            <hr></hr>
            <h6>Built & beautified by Yurika Jacobsson</h6>
          </Col>
        </Container> 
    )
  }
}

export default Footer