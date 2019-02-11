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
            <CardText>UI/UX, PM, Visual Design, Branding, Research</CardText>
          </CardBody>
        </Card>
        <Card className="text-left">
          <CardBody>
            <CardTitle className="tapcast-color">Duration</CardTitle>
            <CardText>Aug - Nov 2018</CardText>
          </CardBody>
        </Card>
        <Card className="text-left">
          <CardBody>
            <CardTitle className="tapcast-color">Tools</CardTitle>
            <CardText>Sketch, InVision, Asana, Paper & Pen</CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <Col className="tapcast-process">
        <hr></hr>
        <h6 className="secondary-header tapcast-color">01. The Beginning</h6>
        <Media body>
          Tapcast is a data-driven, marketing intelligence platform aimed to help people to understand and scale their audiences. After the initial Platform 2.0 release, we (Product) often discussed how we could improve UX and possibly UI of the new Platform. As a project manager with design and technical chops, I decided to tackle this as my own side project to revamp the Tapcast Platform.
        </Media>
        <h6 className="secondary-header tapcast-color" id="top-header"><span className="bold">02.</span> The Challenge</h6>
        <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
        <h6 className="secondary-header tapcast-color">03. The Research</h6>
        <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
        <h6 className="secondary-header tapcast-color">04. The Process</h6>
        <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
        <h6 className="secondary-header tapcast-color">05. The Solution</h6>
        <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
        <h6 className="secondary-header tapcast-color"><span className="bold">06.</span> The End</h6>
        <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Col>
    </Container>
  );
};

export default TapcastContent