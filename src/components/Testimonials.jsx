import React from 'react';
import { Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row } from 'reactstrap';

const Testimonials = (props) => {
  return (
    <div>
      <Row>
        <Col md="4">
          <Card className="testimonials" id="first-testimonial">
            <CardBody className="testimonials-body">
              <CardTitle className="comma">"</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
            <div className="testimonial-img"></div>
            <CardFooter className="text-muted testimonials-names">Name</CardFooter>
          </Card>
        </Col>
        <Col md="4">
          <Card className="testimonials">
            <CardBody className="testimonials-body">
              <CardTitle className="comma">"</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
            <div className="testimonial-img"></div>
            <CardFooter className="text-muted testimonials-names">Name</CardFooter>
          </Card>
        </Col>
        <Col md="4">
          <Card className="testimonials" id="last-testimonial">
            <CardBody className="testimonials-body">
              <CardTitle className="comma">"</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
            <div className="testimonial-img"></div>
            <CardFooter className="text-muted testimonials-names">Name</CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;