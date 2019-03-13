import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardImg, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import AOS from 'aos';

import oldTapcast from '../assets/tapcast/oldtapcast.png';
import tapcastLogos from '../assets/tapcast/tapcastlogos.png';
import currTapcastLogo from '../assets/tapcast/currTapcastLogo.png';
import tapcastPlatform from '../assets/tapcast/tapcast-platform.png';
import tapcastAudience from '../assets/tapcast/tapcast-audience.png';
import tapcastLanding from '../assets/tapcast/tapcast-landing.png';
import tapcastPayment from '../assets/tapcast/tapcast-payment.png';
import tapcastSignup from '../assets/tapcast/tapcast-signup.png';

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
        <Jumbotron className="tapcast-projpic" fluid></Jumbotron>
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
                  <span className="chunky-underline" id="tapcast-underline-color">Tapcast platform is complicated.</span> <br></br><br></br>
                  <CardImg top width="100%" src={oldTapcast} className="proj-img"></CardImg> <br></br>
                  <span className="img-caption">tapcast v2.0</span> <br></br><br></br>
                  Why? The purpose of this platform is to provide marketing insights and help demystify <a href="https://www.facebook.com/business/insights/people/audiences"><span className="tapcast-links">Facebook audiences</span></a>. However, advertising on Facebook is confusing to many (read <a href="https://www.wired.com/story/facebooks-targeted-ads-are-more-complex-than-it-lets-on/"><span className="tapcast-links">here</span></a>, <a href="https://www.postplanner.com/blog/how-to-fix-facebook-ads-not-working"><span className="tapcast-links">here</span></a>, and <a href="https://www.929marketing.com/blog/this-is-why-your-facebook-ads-didnt-work"><span className="tapcast-links">here</span></a>) and without a baseline knowledge of advertising on Facebook, it is a challenge to understand the platform, let alone its merit.<br></br><br></br>
                  In addition, the new platform is vastly different from before. Previous iteration of the platform focused on targeted videos (think <a href="https://www.intercom.com"><span className="tapcast-links">Intercom</span></a> but with a video) which allowed users to install a video widget to their websites. Unfortunately, this meant that many of our existing users did not have any prior knowledge on Facebook advertising and <span className="chunky-underline" id="tapcast-underline-color">we quickly found out that understanding the new platform was a huge struggle for many</span>. As expected, we lost some existing users along the way and soon after, we started observing low conversion rates for new users as well.<br></br><br></br>
                  After going through platform as a team and individually - combined with customer feedback - we concluded our product requires a heavy ramp-up period and extensive onboarding. Paired with our business goal of converting as many new users as possible, I decided to <span className="chunky-underline" id="tapcast-underline-color">focus on new user journey and payment flow</span>.<br></br><br></br> 
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
                  To be competitive, I also felt that our platform also needed some serious rebranding. I aimed for a modern, clean, simple look while being respectful of the previous design. I first redesigned the the logo:<br></br><br></br>
                  <CardImg top width="100%" src={currTapcastLogo} className="proj-img" id="old-logo"></CardImg> <br></br>
                  <span className="img-caption">old tapcast logo</span>
                  <CardImg top width="100%" src={tapcastLogos} className="proj-img"></CardImg> <br></br>
                  <span className="img-caption">new tapcast logo</span> <br></br><br></br>
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
                  <CardImg top width="100%" src={tapcastPlatform} className="proj-img"></CardImg> <br></br>
                  <span className="img-caption">dashboard</span> <br></br><br></br>
                  <CardImg top width="100%" src={tapcastLanding} className="proj-img"></CardImg> <br></br>
                  <span className="img-caption">landing page</span> <br></br><br></br>
                  <CardImg top width="100%" src={tapcastSignup} className="proj-img"></CardImg> <br></br>
                  <span className="img-caption">sign up</span> <br></br><br></br>
                  <CardImg top width="100%" src={tapcastAudience} className="proj-img"></CardImg> <br></br>
                  <span className="img-caption">audience page</span> <br></br><br></br>
                  <CardImg top width="100%" src={tapcastPayment} className="proj-img"></CardImg> <br></br>
                  <span className="img-caption">payment</span> <br></br><br></br>
                  <a href="https://invis.io/7FQVFPD92ZM"><span className="tapcast-links">Click here to view the full prototype</span></a>
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">05.</div> The End</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                Although this project never took off to be in a development sprint (as with any startup, engineering resources was scarce), <span className="chunky-underline" id="tapcast-underline-color">it was extremely valuable to growing my own capabilities to design with numerous constraints.</span><br></br><br></br>
                Due to limited engineering resources, one of the biggest constraints in implementing this project was to overhaul the design of a Platform while keeping the number of custom UI elements minimal and still making it look vastly different from its previous form. I was also limited to using assets from <a href="https://material-ui.com"><span className="tapcast-links">Material UI</span></a> which added to the challenge.
                Last but not least, I had to strictly abide with Facebook app review policies and formulate UX flows that satisfied their requirements. <br></br><br></br>
                To add, there are some scenarios that I overlooked during the creation of this project - what if user’s free trial expires before they upgrade? What if a new user decides not to follow the Get Started checklist? Is the platform intuitive enough for a new user to understand without going through the checklist? What if they do not have a pre-existing ad account on Facebook? Needless to say, I plan to tackle these issues if this project ever found itself in product discussion again.<br></br><br></br>
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header" id="tapcast-secondary">key takeways</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  <ol className="takeaways">
                    <li>Embrace constraints and challenge yourself.</li>
                    <li>Collaborate with stakeholders and cross-functionally to understand the overarching pain points of customers.</li>
                    <li>Set project scope and maintain focus yet be open to changes.</li>
                  </ol>
                </Media>
              </Col>
            </Row>
        </Col>
      </Container>
    );
  }
}

export default TapcastContent