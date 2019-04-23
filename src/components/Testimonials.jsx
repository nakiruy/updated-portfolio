import React from 'react';
import { Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row } from 'reactstrap';

const Testimonials = (props) => {
  return (
    <div>
      <Row>
        <Col lg="4">
          <Card className="testimonials">
            <CardBody className="testimonials-body">
              <CardTitle className="comma">"</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
            <div className="testimonial-img"></div>
            <CardFooter className="text-muted testimonials-names">Footer</CardFooter>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="testimonials">
            <CardBody className="testimonials-body">
              <CardTitle className="comma">"</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
            <div className="testimonial-img"></div>
            <CardFooter className="text-muted testimonials-names">Footer</CardFooter>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="testimonials">
            <CardBody className="testimonials-body">
              <CardTitle className="comma">"</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
            <div className="testimonial-img"></div>
            <CardFooter className="text-muted testimonials-names">Footer</CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;