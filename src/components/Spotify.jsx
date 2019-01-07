import React from 'react';

import Navigation from './Navigation';
import { Container, Row, Col } from 'reactstrap';

class Spotify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container className="spotify">
        <Navigation />
      </Container>
    )
  }
}

export default Spotify