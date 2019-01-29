import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Row, Col, Badge } from 'reactstrap';

class ScrollUpButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Container>
          <Col className="scroll-up">
          </Col>
        </Container>
    )
  }
}

export default ScrollUpButton