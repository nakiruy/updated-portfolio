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
          <Col md="9" className="greetings" id="spotify-greetings">
            <h1 className="headline" id="spotify-headline">Controlling your music through gestures and sounds</h1>
            <Badge color="primary" pill>Primary</Badge>
          </Col>
        </Container>
    )
  }
}

export default SpotifyHeader