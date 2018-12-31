import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
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
            <h1 className="headline">Hi, I'm <Link exact to="/about"><span id="name">Yurika</span></Link>.</h1>
            <h6 id="subtitle">a designer & technical project manager based in the bay</h6> 
            {/* <div className="arrowDownContainer">
              <span className="arrowDown" id="arrowOne"></span>
            </div> */}
          </Col>
        </Container>
      </div>
    )
  }
}

export default Greetings