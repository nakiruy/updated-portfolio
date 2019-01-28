import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Row, Col, Badge } from 'reactstrap';

import Contact from './ContactBanner';

class SpotifyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Container>
          <Col md="9" className="spotify-header">
            <h1 className="headline"></h1>
          </Col>
        </Container>
    )
  }
}

export default SpotifyHeader