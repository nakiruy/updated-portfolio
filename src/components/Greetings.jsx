import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Col} from 'reactstrap';

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Container>
          <Col md="9" className="greetings">
            <h1 className="headline"><Link to="/about"><span id="name">Yurika Jacobsson</span></Link> is a designer located in the Bay Area. <span id="designer">Also a frontend developer</span>.</h1>
            {/* <h6 id="subtitle">- Get in touch.</h6>  */}
            {/* <a href="#" className="btn" id="contact">Contact Me</a> */}
            {/* <div className="arrowDownContainer">
              <span className="arrowDown" id="arrowOne"></span>
            </div> */}
            <h6 className="secondary-header" id="projects">selected projects</h6>
          </Col>
        </Container>
    )
  }
}

export default Greetings