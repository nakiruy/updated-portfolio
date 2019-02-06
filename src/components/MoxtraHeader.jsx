import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Row, Col, Badge } from 'reactstrap';

import Contact from './ContactBanner';

class MoxtraHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Container>
          <Col md="9" className="moxtra-header">
            <h1 className="headline">Introducing a new way of business team collaboration</h1>
            <Badge color="primary" pill>Primary</Badge>
          </Col>
        </Container>
    )
  }
}

export default MoxtraHeader