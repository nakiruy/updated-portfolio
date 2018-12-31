import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Tapcast from './Tapcast';
import Moxtra from './Moxtra';
import Spotify from './Spotify';

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
            <Tapcast />
            <Moxtra />
            <Spotify />
          </Col>
        </Container>
      </div>
    )
  }
}

export default AllProjects