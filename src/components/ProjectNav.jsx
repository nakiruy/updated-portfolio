import React from 'react';

import { Container, Card, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class ProjectNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let nextButton;

    if (window.location.pathname === "/projects/tapcastplatform") {
      nextButton = <Link to="/projects/tapcastbilling"><span className="project-navlink">Tapcast Billing</span></Link>
    } else if (window.location.pathname === "/projects/moxtra") {
      nextButton = <Link to="/projects/tapcastplatform"><span className="project-navlink">Tapcast Platform</span></Link>
    } else if (window.location.pathname === "/projects/spotify") {
      nextButton = <Link to="/projects/moxtra"><span className="project-navlink">Moxtra</span></Link>
    } else if (window.location.pathname === "/projects/tapcastbilling") {
      nextButton = <Link to="/projects/spotify"><span className="project-navlink">Spotify</span></Link>
    }

    return (
      <Container>
        <Row className="project-nav">
        <Col>
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