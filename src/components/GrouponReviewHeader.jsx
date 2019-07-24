import React from 'react';

import { Container, Col } from 'reactstrap';


class GrouponReviewHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Container>
          <Col md="9" className="greetings" id="groupon-greetings">
            <h1 className="headline" id="groupon-headline">Web Application Critique</h1>
            <h6 className="secondary-header" id="groupon-secondary"><br></br></h6>
            {/* Objective: Enhancing onboarding flow */}
          </Col>
        </Container>
    )
  }
}

export default GrouponReviewHeader