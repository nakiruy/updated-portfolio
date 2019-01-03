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
            <h1 className="headline">Hi, I'm <Link exact to="/about"><span id="name">Yurika</span></Link>.</h1>
            <h6 id="subtitle">A designer & technical project manager located in the bay area. I also dabble in code.</h6> 
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