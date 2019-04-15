import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardImg, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import AOS from 'aos';
import ImageZoom from 'react-medium-image-zoom';

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
                <a href="https://www.tapcast.io"><span className="tapcast-links">Tapcast</span></a> is a data-driven, marketing intelligence platform aimed to help marketers to understand and scale their audiences. <br></br><br></br>
                After the initial platform 2.0 release, I collaborated often with the product team as we discussed how we could further improve UX and possibly redesign the UI of the new Platform. <br></br><br></br>
                As a project manager with design and technical chops, I decided to redesign the platform as my own side project <span className="chunky-underline" id="tapcast-underline-color">to revamp the Tapcast platform - its branding, visual components, onboarding, and most of all, experience.</span>
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
                  <ImageZoom
                    image={{
                      src: 'http://assets.yurika.design/tapcast/oldtapcast.png',
                      alt: 'Old Tapcast',
                      className: 'img',
                      style: { width: '100%' }
                    }}
                    zoomImage={{
                      src: 'http://assets.yurika.design/tapcast/oldtapcast.png',
                      alt: 'Old Tapcast',
                    }}
                  /><br></br>
                  <span className="img-caption">tapcast v2.0</span> <br></br><br></br>
                  Why? The purpose of this platform is to provide marketing insights and help demystify <a href="https://www.facebook.com/business/insights/people/audiences"><span className="tapcast-links">Facebook audiences</span></a>. However, advertising on Facebook is confusing to many (read <a href="https://www.wired.com/story/facebooks-targeted-ads-are-more-complex-than-it-lets-on/"><span className="tapcast-links">here</span></a>, <a href="https://www.postplanner.com/blog/how-to-fix-facebook-ads-not-working"><span className="tapcast-links">here</span></a>, and <a href="https://www.929marketing.com/blog/this-is-why-your-facebook-ads-didnt-work"><span className="tapcast-links">here</span></a>) and without a baseline of knowledge of advertising on Facebook, it is a challenge to understand the platform, let alone its merit.<br></br><br></br>
                  In addition, the new platform is vastly different from before. The previous iteration of the platform focused on targeted videos (think <a href="https://www.intercom.com"><span className="tapcast-links">Intercom</span></a> but instead of chat, a video) which allowed users to install a video widget to their websites through Tapcast SDK. <br></br><br></br>
                  <ImageZoom
                    image={{
                      src: 'http://assets.yurika.design/tapcast/tapcastPIP.png',
                      alt: 'Tapcast PIP',
                      className: 'img',
                      style: { width: '100%' }
                    }}
                    zoomImage={{
                      src: 'http://assets.yurika.design/tapcast/tapcastPIP.png',
                      alt: 'Tapcast PIP',
                    }}
                  /><br></br>
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
                  To kick start the redesign, I decided to research our competitors. Fortunately, Facebook has a <a href="https://www.facebook.com/business/solutions-explorer/"><span className="tapcast-links">handy directory</span></a> of their marketing partners which provides a quick overview of each company. This expedited my search for identifying Tapcast's closest competition.<br></br><br></br>
                  After comparing and contrasting a handful of companies as well as coupling user sessions/gathering feedbacks from our customer success team, it was clear that <span className="chunky-underline" id="tapcast-underline-color">our onboarding wasn't enough</span>.
                  We provided no clear path on how to utilize the platform with zero cues to prompt users to act.<br></br><br></br> 
                  Moreover, we concluded internally that Tapcast as a product requires a heavy ramp-up period and extensive onboarding. Thus, keeping in mind the high priority business goal of converting as many new users as possible, I decided <span className="chunky-underline" id="tapcast-underline-color">to focus on the new user journey and payment flow</span> in this redesign.<br></br><br></br> 
                  <ImageZoom
                    image={{
                      src: 'http://assets.yurika.design/tapcast/tapcastFlowNew.png',
                      alt: 'Tapcast Flowchart',
                      className: 'img',
                      style: { width: '100%' }
                    }}
                    zoomImage={{
                      src: 'http://assets.yurika.design/tapcast/tapcastFlowNew.png',
                      alt: 'Tapcast Flowchart',
                    }}
                  /><br></br>
                  <span className="img-caption">Signup to payment flowchart</span> <br></br><br></br>
                  To be competitive, I also felt that our platform needed some serious rebranding. I aimed for a modern, clean, simple look while being respectful of the previous design. I first redesigned the logo:<br></br><br></br>
                  <Row>
                    <Col xs="6">
                      <CardImg top width="100%" src="http://assets.yurika.design/tapcast/fullwgrid.png" className="proj-img no-shadow"></CardImg>
                    </Col>
                    <Col xs="6">
                      <CardImg top width="100%" src="http://assets.yurika.design/tapcast/fullLogo.png" className="proj-img no-shadow"></CardImg>
                    </Col>
                  </Row>
                  <span className="img-caption">new tapcast logos</span> <br></br><br></br>
                  With logo design complete, I started to iteratively build the final design.<br></br><br></br>
                  <Row>
                    <Col md="6">
                      <ImageZoom
                        image={{
                          src: 'http://assets.yurika.design/tapcast/mockupBW.png',
                          alt: 'Tapcast Mockup BW',
                          className: 'img',
                          style: { width: '100%' }
                        }}
                        zoomImage={{
                          src: 'http://assets.yurika.design/tapcast/mockupBW.png',
                          alt: 'Tapcast Mockup BW',
                        }}
                      /><br></br>
                    </Col>
                    <Col md="6">
                      <ImageZoom
                        image={{
                          src: 'http://assets.yurika.design/tapcast/mockupColor.png',
                          alt: 'Tapcast Mockup Color',
                          className: 'img',
                          style: { width: '100%' }
                        }}
                        zoomImage={{
                          src: 'http://assets.yurika.design/tapcast/mockupColor.png',
                          alt: 'Tapcast Mockup Color',
                        }}
                      /><br></br>
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
                  <a href="https://invis.io/7FQVFPD92ZM"><span className="tapcast-links">Click here to view the full prototype</span></a><br></br><br></br>
                  <ImageZoom
                      image={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-platform.png',
                        alt: 'Dashboard',
                        className: 'img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-platform.png',
                        alt: 'Dashboard',
                      }}
                  /><br></br>
                  <span className="img-caption">dashboard</span> <br></br><br></br>
                  <ImageZoom
                      image={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-landing.png',
                        alt: 'Landing Page',
                        className: 'img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-landing.png',
                        alt: 'Landing Page',
                      }}
                  /><br></br>
                  <span className="img-caption">landing page</span> <br></br><br></br>
                  <ImageZoom
                      image={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-signup.png',
                        alt: 'Signup Page',
                        className: 'img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-signup.png',
                        alt: 'Signup Page',
                      }}
                  /><br></br>
                  <span className="img-caption">sign up</span> <br></br><br></br>
                  <ImageZoom
                      image={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-audience.png',
                        alt: 'Audience Page',
                        className: 'img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-audience.png',
                        alt: 'Audience Page',
                      }}
                  /><br></br>
                  <span className="img-caption">audience page</span> <br></br><br></br>
                  <ImageZoom
                      image={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-payment.png',
                        alt: 'Payment Page',
                        className: 'img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-payment.png',
                        alt: 'Payment Page',
                      }}
                  /><br></br>
                  <span className="img-caption">payment</span> <br></br>
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">05.</div> The End</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                Although this project never took off to be in a development sprint (as with any startup, engineering resources was scarce), <span className="chunky-underline" id="tapcast-underline-color">this project was extremely valuable to growing my capabilities to design with numerous constraints.</span><br></br><br></br>
                Due to limited engineering resources, one of the biggest constraints in implementing this project was overhauling the existing platform design while keeping the number of custom UI elements minimal but still redesign the platform to look vastly different from its previous form. I was also limited to using assets from <a href="https://material-ui.com"><span className="tapcast-links">Material UI</span></a> which added to the challenge.
                Last but not least, I had to strictly abide with Facebook app review policies and formulate UX flows that satisfied those requirements as well. <br></br><br></br>
                As you may have noticed, there are a handful of scenarios that I did not flesh out during the creation of this project. That is, what if a user’s free trial expires before they upgrade? What if a new user decides not to follow the Get Started checklist? Is the platform intuitive enough for a new user to understand without going through the checklist? What if they do not have a pre-existing ad account on Facebook? Needless to say, I hope to tackle these issues when this project is incorporated into the product roadmap.<br></br><br></br>
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