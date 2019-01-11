import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Jumbotron className="contact">
          <h1 className="footer">Interested in working together? Get in touch.</h1>
          <a href="mailto:nakiruy@gmail.com" className="btn" id="contact-btn"><span id="getintouch">Contact Me</span></a>
        </Jumbotron>
      </div>
    )
  }
}

export default Contact