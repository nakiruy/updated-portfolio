import React from 'react';

import { Container, Col } from 'reactstrap';


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
            <h1 className="headline" id="spotify-headline">Controlling your driving music through gestures</h1>
            <h6 className="secondary-header" id="spotify-secondary">spotify</h6>
          </Col>
        </Container>
    )
  }
}

export default SpotifyHeader