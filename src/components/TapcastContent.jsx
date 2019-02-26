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
          Tapcast is a data-driven, marketing intelligence platform aimed to help people to understand and scale their audiences. 
          After the initial platform 2.0 release, we (Product) often discussed how we could improve UX and possibly redesign the UI of the new Platform. 
          As a project manager with design and technical chops, I decided to tackle this as my own side project to revamp the Tapcast platform from branding, visual components, onboarding, and most of all, experience.
        </Media>
        <h6 className="secondary-header tapcast-color" id="top-header"><span className="bold">02.</span> The Challenge</h6>
        <Media body>
          As with any startup, the biggest challenge for this project was the lack of resources. In particular, we were in dire need of engineering resources. With only two full-time developers and one part-time developer, it was a difficult proposition to focus limited engineering resources on the redesigning of the platform (I’ll expand more on this later). 
          In addition, the concepts around the Tapcast platform are complicated and requires a ramp-up period. Why? The purpose of this platform is to provide insights and help demystify your Facebook audiences. 
          Advertising on Facebook can be confusing and complicated (read <span className="tapcast-links">here</span>, <span className="tapcast-links">here</span>). Without a baseline knowledge of advertising on Facebook, it will be a challenge for any users to understand the purpose of Tapcast. In other words, this product is not for everybody. Then, how do you create a platform that is comprehensive and comprehensible for users - all while keeping in mind of engineering resources? 
          [Add image of Tapcast v2.0 here]
        </Media>
        <h6 className="secondary-header tapcast-color">03. The Process</h6>
        <Media body>
          To begin, I decided to research our competitors. Fortunately, Facebook has a <a href="https://www.facebook.com/business/solutions-explorer/"><span className="tapcast-links">handy directory</span></a> of their marketing partners and most offer free trials of their product. After comparing and contrasting a handful of companies and coupled with watching few user sessions/demo recap calls with our Sales team, I identified the major bottleneck in the experience of our software. Our onboarding simply lacked. For a platform with complicated concepts, we provided very little guidance to our users. How can we expect users to convert without understanding the value of our software? So I sketched up possible solutions: 
          With iterations and wireframes:
          To be competitive, I felt like our platform also needed some serious rebranding. I aimed for a modern, clean, simple look while being respectful of the previous design. I came up with a brand identity and here's the result in form of a logo:
          [Add previous logo to new logo here]
          Now I had something to work off of, I started to iteratively build the potential final product.
        </Media>
        <h6 className="secondary-header tapcast-color">04. The Solution</h6>
        <Media body>
          [Add Final images/prototype here]
        </Media>
        <h6 className="secondary-header tapcast-color"><span className="bold">05.</span> The End</h6>
        <Media body>
          Although this project never took off to be in a development sprint, it was extremely valuable to growing my own capabilities to design with numerous constraints. As such, one of the biggest challenges to this project was to design a Platform where custom UI components had to be negligible for engineering and limit to components that are found in Material UI (https://material-ui.com) without sacrificing the look of Tapcast brand. In addition, we had to play nice with Facebook app review policies and formulate UX flows that abided by their policies. If this project was ever green-lighted for development, I would have worked closely with the engineers to determine if we can create custom UI from the above library without sacrificing a lot of developer time. 
          To add, there are definitely some scenarios that I did not solve with this project - what if user’s free trial expires before they upgrade? What if a new user decides not to follow the Get Started checklist? What if they do not have a pre-existing ad account on Facebook? I would love to tackle these issues if this project ever found itself in Product again.
        </Media>
      </Col>
    </Container>
  );
};

export default TapcastContent