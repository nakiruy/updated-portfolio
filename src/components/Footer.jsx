import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SocialIcons from './SocialIcons';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Container className="copyright">
          {/* <hr></hr> */}
          <Row className="footer-row">
          <Col md="6">
            <SocialIcons />
          </Col>
          <Col md="6">
            <div id="copyright-copy">Built & beautified by Yurika Jacobsson</div>
          </Col>
          </Row>
        </Container> 
    )
  }
}

export default Footer