import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Row, Col } from 'reactstrap';

import Navigation from './Navigation';

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="works">
        <Navigation />
        <Container>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        </Container>
      </div>
    )
  }
}

export default Works