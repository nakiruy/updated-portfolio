import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Badge } from 'reactstrap';

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
            <h1 className="headline"><Link exact to="/about"><span id="name">Yurika Jacobsson</span></Link> is a designer & technical project manager located in the Bay Area. <span id="developer">Also dabbles in code.</span></h1>
            {/* <h6 id="subtitle">- Get in touch.</h6>  */}
            {/* <a href="#" className="btn" id="contact">Contact Me</a> */}
            {/* <div className="arrowDownContainer">
              <span className="arrowDown" id="arrowOne"></span>
            </div> */}
            <h6 className="secondary-header" id="projects">selected projects</h6>
          </Col>
        </Container>
      </div>
    )
  }
}

export default Greetings