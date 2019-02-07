import React from 'react';
import { Media, Col, Jumbotron, Container, Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';

const TapcastContent = () => {
  return (
    <Container>
      <Jumbotron className="tapcast-projpic" fluid>
      </Jumbotron>
      <CardGroup className="proj-brief" id="tapcast-brief">
        <Card className="text-left">
          <CardBody>
            <CardTitle className="tapcast-color">Role</CardTitle>
            <CardText>Research, UI/UX...</CardText>
          </CardBody>
        </Card>
        <Card className="text-left">
          <CardBody>
            <CardTitle className="tapcast-color">Timeline</CardTitle>
            <CardText>2018</CardText>
          </CardBody>
        </Card>
        <Card className="text-left">
          <CardBody>
            <CardTitle className="tapcast-color">Tools</CardTitle>
            <CardText>Sketch...</CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <Col>
        <h6 className="secondary-header tapcast-color">01. The Challenge</h6>
      </Col>
    </Container>
  );
};

export default TapcastContent