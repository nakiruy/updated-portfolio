import React from 'react';
import { Media, Col, Jumbotron, Container, Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';

const SpotifyContent = () => {
  return (
    <Container>
      <Jumbotron className="spotify-projpic" fluid>
      </Jumbotron>
      <CardGroup className="proj-brief" id="spotify-brief">
        <Card className="text-left">
          <CardBody>
            <CardTitle className="spotify-color">Role</CardTitle>
            <CardText>UX, UI...</CardText>
          </CardBody>
        </Card>
        <Card className="text-left">
          <CardBody>
            <CardTitle className="spotify-color">Timeline</CardTitle>
            <CardText>Early 2018</CardText>
          </CardBody>
        </Card>
        <Card className="text-left">
          <CardBody>
            <CardTitle className="spotify-color">Tools</CardTitle>
            <CardText>Sketch...</CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <Col>
        <h6 className="secondary-header spotify-color">01. The Challenge</h6>
      </Col>
  </Container>
  );
};

export default SpotifyContent