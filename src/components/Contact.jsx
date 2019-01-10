import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Container className="contact">
          <Col className="contact-method">
            <hr></hr>
            <h1 className="footer"><span id="name">Get in touch.</span></h1>
          </Col>
        </Container>
      </div>
    )
  }
}

export default Contact