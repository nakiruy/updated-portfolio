import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import TapcastJumbo from './TapcastJumbo';
import MoxtraJumbo from './MoxtraJumbo';
import SpotifyJumbo from './SpotifyJumbo';

class AllProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Container className="allProjects">
          <Col className="projects">
            {/* <h1 className="headline" id="project-headline">Projects.</h1> */}
            <TapcastJumbo />
            <MoxtraJumbo />
            <SpotifyJumbo />
            <h6 className="secondary-header" id="contact-header">get in touch</h6>
          </Col>
        </Container>
      </div>
    )
  }
}

export default AllProjects