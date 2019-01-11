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
            <h1 className="footer">Interested in working together? <a href="mailto:nakiruy@gmail.com"><span id="getintouch">Get in touch.</span></a></h1>
          </Col>
        </Container>
      </div>
    )
  }
}

export default Contact