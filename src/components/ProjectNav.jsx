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
      prevButton = <p className="lead" id="moxtra-lead"><Link exact to="/projects/moxtra"><span className="highlight-moxtra" id="btn-moxtra"><a className="btn">View Project</a></span></Link></p>
      nextButton = <p className="lead" id="spotify-lead"><Link exact to="/projects/spotify"><span className="highlight" id="btn-spotify"><a className="btn">View Project</a></span></Link></p>
    } else if (window.location.pathname === "/projects/moxtra") {
      prevButton = <p className="lead" id="tapcast-lead"><Link exact to="/projects/tapcast"><span className="highlight" id="btn-tapcast"><a className="btn">View Project</a></span></Link></p>
      nextButton = <p className="lead" id="spotify-lead"><Link exact to="/projects/spotify"><span className="highlight" id="btn-spotify"><a className="btn">View Project</a></span></Link></p>
    } else {
      prevButton = <p className="lead" id="tapcast-lead"><Link exact to="/projects/tapcast"><span className="highlight" id="btn-tapcast"><a className="btn">View Project</a></span></Link></p>
      nextButton = <p className="lead" id="moxtra-lead"><Link exact to="/projects/moxtra"><span className="highlight-moxtra" id="btn-moxtra"><a className="btn">View Project</a></span></Link></p>
    }

    return (
      <Row className="project-nav">
      <Col md="6">
        <Card body>
          <CardTitle>See Prev</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          {prevButton}
        </Card>
      </Col>
      <Col md="6">
        <Card body>
          <CardTitle>See Next</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          {nextButton}
        </Card>
      </Col>
    </Row>
    )
  }
}

export default ProjectNav