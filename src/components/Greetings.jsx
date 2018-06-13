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
              <h1 id="name">Hello. I'm Yurika.</h1>
              <h3 id="headline">a designer and project manager based in the bay 🌊</h3>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Greetings