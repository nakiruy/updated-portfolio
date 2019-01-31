import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import Navigation from './Navigation';
import Footer from './Footer';

class ProjectNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
    <Container className="project-nav" fluid>
      See Next
      See Previous
    </Container>
    )
  }
}

export default ProjectNav