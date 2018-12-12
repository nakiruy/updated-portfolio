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
          <Col className="greetings">
            {/* <h3 id="name">Hello. I'm Yurika.</h3>
            <h3 id="headline">a designer and project manager based in the bay</h3> */}
          </Col>
        </Container>
      </div>
    )
  }
}

export default Greetings