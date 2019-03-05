import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';

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
      <hr></hr>
      <Col className="tapcast-process">
        <Row>
          <Col lg="4">
            <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">01.</div>The Beginning</h6>
          </Col>
          <Col lg="8">
            <Media body>
              <a href="https://www.tapcast.io"><span className="tapcast-links">Tapcast</span></a> is a data-driven, marketing intelligence platform aimed to help people to understand and scale their audiences. <br></br><br></br>
              After the initial platform 2.0 release, I worked closely with product team as we often discussed how we could further improve UX and possibly redesign the UI of the new Platform. <br></br><br></br>
              As a project manager with design and technical chops, I decided to tackle this as my own side project to <span className="chunky-underline" id="tapcast-underline-color">revamp the Tapcast platform from branding, visual components, onboarding, and most of all, experience.</span> <br></br><br></br>
            </Media>
          </Col>
          </Row>
          <Row>
            <Col lg="4">
              <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">02.</div> The Challenge</h6>
            </Col>
            <Col lg="8">
              <Media body>
                Simply put, Tapcast platform is complicated. <br></br><br></br>Why? Advertising on Facebook can be confusing to many (read <span className="tapcast-links">here</span>, <span className="tapcast-links">here</span>, and <span className="tapcast-links">here</span>) and the purpose of this platform is to provide insights and help demystify your Facebook audiences. Without a baseline knowledge of advertising on Facebook, it will be a challenge for any users to understand the merit of Tapcast.<br></br><br></br>
                [ADD CUSTOMER MAIL/ZENDESK ETC HERE]
                As our platform had previous users, we quickly found out it was a huge pain point for a user to understand the new capabilities of the platform. Naturally, this bottleneck became a business issue as we had very low conversion rates in both existing and new users. <br></br><br></br>After going through platform individually - paired with customer feedback - we concluded this product requires a heavy ramp-up period. Then, how can we take our current platform and minimize the ramp-up period?<br></br><br></br> 
                [Add image of Tapcast v2.0 here]
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">03.</div> The Process</h6>
            </Col>
            <Col lg="8">
              <Media body>
                [ADD PROCESS OVERVIEW]
                To kick off, I decided to research our competitors. Fortunately, Facebook has a <a href="https://www.facebook.com/business/solutions-explorer/"><span className="tapcast-links">handy directory</span></a> of their marketing partners. 
                After comparing and contrasting a handful of companies and coupled with watching few user sessions/demo recap calls with our Sales team, it was clear that our onboarding simply lacked. [ADD COMPETITOR FLOW vs. OURS] For a platform with complicated concepts, we provided very little guidance to our users. How can we expect users to convert without conveying the value of the software? So I sketched up possible solutions: 
                With iterations and wireframes:
                To be competitive, I felt like our platform also needed some serious rebranding. I aimed for a modern, clean, simple look while being respectful of the previous design. I came up with a brand identity and here's the result in form of a logo:
                [Add previous logo to new logo here]
                Now I had something to work off of, I started to iteratively build the potential final product.
                [ADD PROGRESS]
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">04.</div> The Solution</h6>
            </Col>
            <Col lg="8">
              <Media body>
                [Add Final images/prototype here]
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">05.</div> The End</h6>
            </Col>
            <Col lg="8">
              <Media body>
              Although this project never took off to be in a development sprint (as with any startup, engineering resources was scarce), it was extremely valuable to growing my own capabilities to design with numerous constraints. With limited engineering resources, one of the biggest challenges in implementing this project was to design a Platform where custom UI components was minimal and limited to components that are found in <a href="https://material-ui.com"><span className="tapcast-links">Material UI</span></a> without sacrificing the look of Tapcast brand. In general, we also had to play nice with Facebook app review policies and formulate UX flows that abided by their policies. If this project was ever green-lighted for development, I would have worked closely with the engineers to determine if we can create more custom UI from the above library without sacrificing a lot of developer time. 
              To add, there are definitely some scenarios that I did not solve with this project - what if user’s free trial expires before they upgrade? What if a new user decides not to follow the Get Started checklist? What if they do not have a pre-existing ad account on Facebook? I would love to tackle these issues if this project ever found itself in product discussion again.
              [Add prototype?]
              </Media>
            </Col>
          </Row>
      </Col>
    </Container>
  );
};

export default TapcastContent