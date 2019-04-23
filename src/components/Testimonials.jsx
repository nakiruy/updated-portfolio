import React from 'react';
import { Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row } from 'reactstrap';

const Testimonials = (props) => {
  return (
    <div>
      <Row>
        <Col lg="4">
          <Card>
            <CardHeader>Header</CardHeader>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
            <CardFooter className="text-muted">Footer</CardFooter>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
            <CardFooter className="text-muted">Footer</CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;