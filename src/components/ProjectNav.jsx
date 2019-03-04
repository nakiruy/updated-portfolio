import React from 'react';

import { Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import Footer from './Footer';

class ProjectNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let prevButton;
    let nextButton;

    if (window.location.pathname === "/projects/tapcast") {
      prevButton = <Link exact to="/projects/spotify"><a className="project-navlink">Spotify</a></Link>
      nextButton = <Link exact to="/projects/moxtra"><a className="project-navlink">Moxtra</a></Link>
    } else if (window.location.pathname === "/projects/moxtra") {
      prevButton = <Link exact to="/projects/tapcast"><a className="project-navlink">Tapcast</a></Link>
      nextButton = <Link exact to="/projects/spotify"><a className="project-navlink">Spotify</a></Link>
    } else if (window.location.pathname === "/projects/spotify") {
      prevButton = <Link exact to="/projects/moxtra"><a className="project-navlink">Moxtra</a></Link>
      nextButton = <Link exact to="/projects/tapcast"><a className="project-navlink">Tapcast</a></Link>
    }

    return (
      <Container>
        <Row className="project-nav">
        <Col md="6">
          <Card body className="prev-card text-left">
            <h6 className="secondary-header" id="prev-proj">previous project</h6>
            {prevButton}
          </Card>
        </Col>
        <Col md="6">
          <Card body className="next-card text-right">
          <h6 className="secondary-header" id="next-proj">next project</h6>
            {nextButton}
          </Card>
        </Col>
      </Row>
    </Container>
    )
  }
}

export default ProjectNav