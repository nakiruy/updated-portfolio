import React from 'react';

import { Container, Col } from 'reactstrap';

class TapcastBillingHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Container>
          <Col md="9" className="greetings" id="tapcast-greetings">
            <h1 className="headline" id="tapcast-headline">Clarifying payments for Tapcast SAAS customers</h1>
            <h6 className="secondary-header" id="tapcast-billing-secondary">tapcast</h6>
          </Col>
        </Container>
    )
  }
}

export default TapcastBillingHeader