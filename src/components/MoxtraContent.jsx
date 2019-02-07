import React from 'react';
import { Media, Col, Jumbotron, Container, Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';

const MoxtraContent = () => {
  return (
    <Container>
    <Jumbotron className= "moxtra-projpic" fluid>
    </Jumbotron>
          <CardGroup className="proj-brief" id="moxtra-brief">
          <Card className="text-left">
            <CardBody>
              <CardTitle className="moxtra-color">Role</CardTitle>
              <CardText>UI, UX, Product...</CardText>
            </CardBody>
          </Card>
          <Card className="text-left">
            <CardBody>
              <CardTitle className="moxtra-color">Timeline</CardTitle>
              <CardText>2017</CardText>
            </CardBody>
          </Card>
          <Card className="text-left">
            <CardBody>
              <CardTitle className="moxtra-color">Tools</CardTitle>
              <CardText>Sketch...</CardText>
            </CardBody>
          </Card>
        </CardGroup>
        <Col>
        <h6 className="secondary-header moxtra-color">01. The Challenge</h6>
        </Col>
    </Container>
  );
};

export default MoxtraContent