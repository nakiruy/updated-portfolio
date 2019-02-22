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
              <CardText>UI/UX, Visual Design, Research</CardText>
            </CardBody>
          </Card>
          <Card className="text-left">
            <CardBody>
              <CardTitle className="moxtra-color">Duration</CardTitle>
              <CardText>Jan - Feb 2018</CardText>
            </CardBody>
          </Card>
          <Card className="text-left">
            <CardBody>
              <CardTitle className="moxtra-color">Tools</CardTitle>
              <CardText>Sketch, Balsamiq, Asana, Paper & Pen</CardText>
            </CardBody>
          </Card>
        </CardGroup>
        <Col className="moxtra-process">
          <hr></hr>
          <h6 className="secondary-header moxtra-color">01. The Beginning</h6>
          <Media body>
            Moxtra is an embeddable, collaboration solution that allows its users to seamlessly integrate itself to power another software with collaboration features - messaging, file sharing, document sharing, video conferencing/chat, etc. It is widely available in iOS, Android, desktop, and web. However, their primary focus is in mobile environments with Moxtra having their own native iOS app featuring capabilities that are available in their APIs and SDKs. I joined Moxtra back in December 2017 as a UI/UX Design Developer Intern after my completion at a coding bootcamp. As my internship came to an end, my manager delegated a final project to me to tackle the onboarding process of Moxtra’s mobile application and also reenvision its visual design.
          </Media>
          <h6 className="secondary-header moxtra-color" id="top-header">02. The Challenge</h6>
          <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
          <h6 className="secondary-header moxtra-color">03. The Process</h6>
          <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
          <h6 className="secondary-header moxtra-color">04. The Solution</h6>
          <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
          <h6 className="secondary-header moxtra-color">05. The End</h6>
          <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Col>
    </Container>
  );
};

export default MoxtraContent