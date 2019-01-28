import React from 'react';

import Navigation from './Navigation';
import { Container, Row, Col } from 'reactstrap';

import Navigation from './Navigation';
import SpotifyHeader from './SpotifyHeader';
import SpotifyContent from './SpotifyContent';
import Footer from './Footer';

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