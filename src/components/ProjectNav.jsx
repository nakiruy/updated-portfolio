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
      prevButton = <Link exact to="/projects/moxtra"><a className="btn">View Project</a></Link>
      nextButton = <Link exact to="/projects/spotify"><a className="btn">View Project</a></Link>
    } else if (window.location.pathname === "/projects/moxtra") {
      prevButton = <Link exact to="/projects/tapcast"><a className="btn">View Project</a></Link>
      nextButton = <Link exact to="/projects/spotify"><a className="btn">View Project</a></Link>
    } else {
      prevButton = <Link exact to="/projects/tapcast"><a className="btn">View Project</a></Link>
      nextButton = <Link exact to="/projects/moxtra"><a className="btn">View Project</a></Link>
    }

    return (
      <Row className="project-nav">
      <Col md="6" className="prev-card">
        <Card body>
          <CardTitle>See Prev</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          {prevButton}
        </Card>
      </Col>
      <Col md="6" className="next-card">
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