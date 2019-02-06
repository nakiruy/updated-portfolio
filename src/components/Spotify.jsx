import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import Navigation from './Navigation';
import SpotifyHeader from './SpotifyHeader';
import SpotifyContent from './SpotifyContent';
import ProjectNav from './ProjectNav';
import Footer from './Footer';

class Spotify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
      <Container className="spotify">
        <Navigation />
        <SpotifyHeader />
        <SpotifyContent />
      </Container>
      <Container className="project-nav-wrapper" fluid>
        <ProjectNav />
      </Container>
      <Container className="footer" fluid>
        <Footer />
      </Container>
      </div>
    )
  }
}

export default Spotify