import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import AOS from 'aos';

class TapcastContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

  render() {
    return (
      <Container>
        <Jumbotron className="tapcast-projpic" fluid />
        <CardGroup className="proj-brief" id="tapcast-brief">
          <Card className="text-left">
            <CardBody data-aos="fade-up">
              <CardTitle className="tapcast-color">Role</CardTitle>
              <CardText>UI/UX, PM, Visual Design, Branding, Research</CardText>
            </CardBody>
          </Card>
          <Card className="text-left">
            <CardBody data-aos="fade-up">
              <CardTitle className="tapcast-color">Duration</CardTitle>
              <CardText>Aug - Nov 2018</CardText>
            </CardBody>
          </Card>
          <Card className="text-left">
            <CardBody data-aos="fade-up">
              <CardTitle className="tapcast-color">Tools</CardTitle>
              <CardText>Sketch, InVision, Asana, Paper & Pen</CardText>
            </CardBody>
          </Card>
        </CardGroup>
        <hr></hr>
        <Col className="tapcast-process">
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">01.</div>The Beginning</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <a href="https://www.tapcast.io"><span className="tapcast-links">Tapcast</span></a> is a data-driven, marketing intelligence platform aimed to help people to understand and scale their audiences. <br></br><br></br>
                After the initial platform 2.0 release, I frequently met with product team as we often discussed how we could further improve UX and possibly redesign the UI of the new Platform. <br></br><br></br>
                As a project manager with design and technical chops, I decided to tackle this as my own side project to <span className="chunky-underline" id="tapcast-underline-color">revamp the Tapcast platform from branding, visual components, onboarding, and most of all, experience.</span>
              </Media>
            </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">02.</div> The Challenge</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  Simply put, Tapcast platform is complicated. <br></br><br></br>
                  Why? Advertising on Facebook can be confusing to many (read <span className="tapcast-links">here</span>, <span className="tapcast-links">here</span>, and <span className="tapcast-links">here</span>) and the purpose of this platform is to provide insights and help demystify your Facebook audiences. Without a baseline knowledge of advertising on Facebook, it will be a challenge for any users to understand the merit of Tapcast.<br></br><br></br>
                  [ADD CUSTOMER MAIL/ZENDESK ETC HERE]<br></br><br></br>
                  As our platform had previous users, we quickly found out that understanding the new platform was the huge pain point for many of our users. Previously, Tapcast was a product focused on targeted videos (think <a href="https://www.intercom.com/"><span className="tapcast-links">Intercom</span></a> but with a video) but as the business stepped away from the original product, we lost some existing users along the way. Soon after, we started observing low conversion rates from both existing and new users.<br></br><br></br>
                  After going through platform as a team and individually - paired with customer feedback - we concluded our product requires a heavy ramp-up period and hand-holding. Then, how can we improve and guide our users through the platform?<br></br><br></br> 
                  [Add image of Tapcast v2.0 here]
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">03.</div> The Process</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  [ADD PROCESS OVERVIEW]<br></br><br></br>
                  To kick off, I decided to research our competitors. Fortunately, Facebook has a <a href="https://www.facebook.com/business/solutions-explorer/"><span className="tapcast-links">handy directory</span></a> of their marketing partners.<br></br><br></br>
                  After comparing and contrasting a handful of companies and coupled with watching few user sessions/demo recap calls with our Sales team, it was clear that <span className="chunky-underline" id="tapcast-underline-color">our onboarding simply lacked</span>.<br></br><br></br>
                  [ADD COMPETITOR FLOW vs. OURS]<br></br><br></br>
                  For a platform with complicated concepts, we provided very little guidance to our users. How can we expect users to convert without conveying the value of the software? So I sketched up possible solutions:<br></br><br></br>
                  With iterations and wireframes:<br></br><br></br>
                  To be competitive, I felt like our platform also needed some serious rebranding. I aimed for a modern, clean, simple look while being respectful of the previous design. I came up with a brand identity and here's the result in form of a logo:<br></br><br></br>
                  [Add previous logo to new logo here]<br></br><br></br>
                  Now I had something to work off of, I started to iteratively build the potential final product.<br></br><br></br>
                  [ADD PROGRESS]
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">04.</div> The Solution</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  [Add Final images/prototype here]<br></br><br></br>
                  <a href="https://invis.io/7FQVFPD92ZM"><span className="tapcast-links">Click here to view prototype</span></a>
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">05.</div> The End</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                Although this project never took off to be in a development sprint (as with any startup, engineering resources was scarce), it was extremely valuable to growing my own capabilities to design with numerous constraints.<br></br><br></br>
                With limited engineering resources, one of the biggest challenges in implementing this project was to design a Platform where custom UI components was minimal and limited to components that are found in <a href="https://material-ui.com"><span className="tapcast-links">Material UI</span></a> without sacrificing the look of Tapcast brand.<br></br><br></br>
                In general, we also had to play nice with Facebook app review policies and formulate UX flows that abided by their policies. If this project was ever green-lighted for development, I would have worked closely with the engineers to determine if we can create more custom UI from the above library without sacrificing a lot of developer time. <br></br><br></br>
                To add, there are definitely some scenarios that I did not solve with this project - what if user’s free trial expires before they upgrade? What if a new user decides not to follow the Get Started checklist? What if they do not have a pre-existing ad account on Facebook? I would love to tackle these issues if this project ever found itself in product discussion again.<br></br><br></br>
                </Media>
              </Col>
            </Row>
        </Col>
      </Container>
    );
  }
}

export default TapcastContent