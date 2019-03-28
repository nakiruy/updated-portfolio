import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardImg, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import AOS from 'aos';

import oldTapcast from '../assets/tapcast/oldtapcast.png';
import fullTapcastGrid from '../assets/tapcast/fullwgrid.png';
import fullTapcast from '../assets/tapcast/fullLogo.png';
import tapcastPIP from '../assets/tapcast/tapcastPIP.png';
import tapcastFlow from '../assets/tapcast/tapcastFlow.png';
import mockupBW from '../assets/tapcast/mockupBW.png';
import mockupColor from '../assets/tapcast/mockupColor.png';
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
                <a href="https://www.tapcast.io"><span className="tapcast-links">Tapcast</span></a> is a data-driven, marketing intelligence platform aimed to help marketers in understanding and scaling their audiences. <br></br><br></br>
                After the initial platform 2.0 release, I frequently met with product team as we often discussed how we could further improve UX and possibly redesign the UI of the new Platform. <br></br><br></br>
                As a project manager with design and technical chops, I decided to tackle this as my own side project to <span className="chunky-underline" id="tapcast-underline-color">revamp the Tapcast platform from branding, visual components, onboarding, and most of all, experience.</span>
              </Media>
            </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">02.</div> The Problem</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  <span className="chunky-underline" id="tapcast-underline-color">Tapcast platform is complicated.</span> <br></br><br></br>
                  <CardImg top width="100%" src={oldTapcast} className="proj-img"></CardImg> <br></br>
                  <span className="img-caption">tapcast v2.0</span> <br></br><br></br>
                  Why? The purpose of this platform is to provide marketing insights and help demystify <a href="https://www.facebook.com/business/insights/people/audiences"><span className="tapcast-links">Facebook audiences</span></a>. However, advertising on Facebook is confusing to many (read <a href="https://www.wired.com/story/facebooks-targeted-ads-are-more-complex-than-it-lets-on/"><span className="tapcast-links">here</span></a>, <a href="https://www.postplanner.com/blog/how-to-fix-facebook-ads-not-working"><span className="tapcast-links">here</span></a>, and <a href="https://www.929marketing.com/blog/this-is-why-your-facebook-ads-didnt-work"><span className="tapcast-links">here</span></a>) and without a baseline knowledge of advertising on Facebook, it is a challenge to understand the platform, let alone its merit.<br></br><br></br>
                  In addition, the new platform is vastly different from before. Previous iteration of the platform focused on targeted videos (think <a href="https://www.intercom.com"><span className="tapcast-links">Intercom</span></a> but with a video) which allowed users to install a video widget to their websites through Tapcast SDK. <br></br><br></br>
                  <CardImg top width="100%" src={tapcastPIP} className="proj-img"></CardImg> <br></br>
                  <span className="img-caption">Example of Tapcast SDK </span> <br></br><br></br>
                  Unfortunately, this meant that many of our existing users did not have the prior knowledge of Facebook advertising and <span className="chunky-underline" id="tapcast-underline-color">we quickly found out that understanding the new platform was a huge struggle for many</span>. As expected, we lost some existing users along the way and soon after, we started observing low conversion rates for new users as well.<br></br><br></br>
                  In my view, a redesign was a no-brainer and I felt strongly that it would be <span className="chunky-underline" id="tapcast-underline-color">the strategic ingredient to increase conversion rates</span>.
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">03.</div> The Process</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  To tackle this problem, I decided to research our competitors. Fortunately, Facebook has a <a href="https://www.facebook.com/business/solutions-explorer/"><span className="tapcast-links">handy directory</span></a> of their marketing partners and provides a quick overview of each company which expedited my search of identifying Tapcast's closest competiton.<br></br><br></br>
                  After comparing and contrasting a handful of companies and coupled with watching few user sessions/gathering feedbacks from our customer success team, it was clear that <span className="chunky-underline" id="tapcast-underline-color">our onboarding simply lacked</span>.
                  We provided no clear path for users to utilize the platform and at that time, no tooltips to prompt users to act. 
                  Moreover, we concluded internally that Tapcast as a product requires a heavy ramp-up period and extensive onboarding. Keeping in mind of the high priority business goal of converting as many new users as possible, I decided to <span className="chunky-underline" id="tapcast-underline-color">focus on new user journey and payment flow</span>.<br></br><br></br> 
                  <CardImg top width="100%" src={tapcastFlow} className="proj-img no-shadow"></CardImg> <br></br>
                  <span className="img-caption">Signup to payment flowchart</span> <br></br><br></br>
                  To be competitive, I also felt that our platform needed some serious rebranding. I aimed for a modern, clean, simple look while being respectful of the previous design. I first redesigned the logo:<br></br><br></br>
                  <Row>
                    <Col md="6">
                      <CardImg top width="100%" src={fullTapcastGrid} className="proj-img no-shadow"></CardImg>
                    </Col>
                    <Col md="6">
                      <CardImg top width="100%" src={fullTapcast} className="proj-img no-shadow"></CardImg>
                    </Col>
                  </Row>
                  <span className="img-caption">new tapcast logos</span> <br></br><br></br>
                  With logo design complete, I started to iteratively build the final design.<br></br><br></br>
                  <Row>
                    <Col md="6">
                      <CardImg top width="100%" src={mockupBW} className="proj-img"></CardImg>
                    </Col>
                    <Col md="6">
                      <CardImg top width="100%" src={mockupColor} className="proj-img"></CardImg>
                    </Col>
                  </Row>
                  <span className="img-caption">Mockup iterations</span><br></br><br></br>
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
                Due to limited engineering resources, one of the biggest constraints in implementing this project was overhauling the existing platform design while keeping the number of custom UI elements minimal but still making it look vastly different from its previous form. I was also limited to using assets from <a href="https://material-ui.com"><span className="tapcast-links">Material UI</span></a> which added to the challenge.
                Last but not least, I had to strictly abide with Facebook app review policies and formulate UX flows that satisfied their requirements as well. <br></br><br></br>
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