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
      prevButton = <Link to="/projects/spotify"><span className="project-navlink">Spotify</span></Link>
      nextButton = <Link to="/projects/moxtra"><span className="project-navlink">Moxtra</span></Link>
    } else if (window.location.pathname === "/projects/moxtra") {
      prevButton = <Link to="/projects/tapcast"><span className="project-navlink">Tapcast</span></Link>
      nextButton = <Link to="/projects/spotify"><span className="project-navlink">Spotify</span></Link>
    } else if (window.location.pathname === "/projects/spotify") {
      prevButton = <Link to="/projects/moxtra"><span className="project-navlink">Moxtra</span></Link>
      nextButton = <Link to="/projects/tapcast"><span className="project-navlink">Tapcast</span></Link>
    }

    return (
      <Container>
        <Row className="project-nav">
        {/* <Col xs="6">
          <Card body className="prev-card text-left">
            <h6 className="secondary-header" id="prev-proj"></h6>
            {prevButton}
          </Card>
        </Col> */}
        <Col>
          <Card body className="next-card text-left">
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