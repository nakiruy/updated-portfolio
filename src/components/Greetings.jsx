import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Row, Col } from 'reactstrap';

import Contact from './Contact';

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="greetings" sm="12" md={{ size: 8, offset: 2}}>
              <h1 id="name">Yurika Jacobsson.</h1>
              <h3 id="headline">UX/UI Designer.</h3>
              <h3 id="headline">I create thoughtful experiences.</h3>
              <Contact />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Greetings