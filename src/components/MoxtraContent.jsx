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
        <Col className="moxtra-process">
          <hr></hr>
          <h6 className="secondary-header moxtra-color">01. The Beginning</h6>
          <h6 className="secondary-header moxtra-color" id="top-header">02. The Challenge</h6>
          <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
          <h6 className="secondary-header moxtra-color">03. The Research</h6>
          <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
          <h6 className="secondary-header moxtra-color">04. The Process</h6>
          <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
          <h6 className="secondary-header moxtra-color">05. The Solution</h6>
          <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
          <h6 className="secondary-header moxtra-color">06. The End</h6>
          <Media body>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Col>
    </Container>
  );
};

export default MoxtraContent