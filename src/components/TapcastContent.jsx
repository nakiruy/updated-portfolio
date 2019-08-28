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
                <a href="https://www.tapcast.io"><span className="tapcast-links">Tapcast</span></a> is a data-driven, marketing intelligence platform aimed to help marketers to understand and scale their Facebook audiences. <br></br><br></br>
                After the initial platform 2.0 release, we observed that there were many points of user drop-off and often discussed how we could counteract the churn rate through improving UX and redesigning the UI of the new platform. <br></br><br></br>
                I decided to take the initiative to begin my own side project <span className="chunky-underline" id="tapcast-underline-color">to brainstorm solutions for lower customer attrition rate.</span>
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
                      src: 'https://assets.yurika.design/tapcast/oldtapcast.png',
                      alt: 'Old Tapcast',
                      className: 'proj-img',
                      style: { width: '100%' }
                    }}
                    zoomImage={{
                      src: 'https://assets.yurika.design/tapcast/oldtapcast.png',
                      alt: 'Old Tapcast',
                      className: 'proj-img'
                    }}
                  /><br></br>
                  <span className="img-caption">tapcast v2.0</span> <br></br><br></br>
                  Why? The purpose of this platform is to provide marketing insights and help demystify <a href="https://www.facebook.com/business/insights/people/audiences"><span className="tapcast-links">Facebook audiences</span></a>. However, advertising on Facebook is confusing to many (read <a href="https://www.wired.com/story/facebooks-targeted-ads-are-more-complex-than-it-lets-on/"><span className="tapcast-links">here</span></a>, <a href="https://www.postplanner.com/blog/how-to-fix-facebook-ads-not-working"><span className="tapcast-links">here</span></a>, and <a href="https://www.929marketing.com/blog/this-is-why-your-facebook-ads-didnt-work"><span className="tapcast-links">here</span></a>) and without a baseline of knowledge of advertising on Facebook, it is a challenge to understand the platform, let alone its merit.<br></br><br></br>
                  In addition, the new platform is vastly different from before. The previous iteration of the platform focused on targeted videos (think <a href="https://www.intercom.com"><span className="tapcast-links">Intercom</span></a> but instead of chat, a video) which allowed users to install a video widget to their websites through Tapcast SDK. <br></br><br></br>
                  <ImageZoom
                    image={{
                      src: 'https://assets.yurika.design/tapcast/tapcastPIP.png',
                      alt: 'Tapcast PIP',
                      className: 'proj-img',
                      style: { width: '100%' }
                    }}
                    zoomImage={{
                      src: 'https://assets.yurika.design/tapcast/tapcastPIP.png',
                      alt: 'Tapcast PIP',
                      className: 'proj-img'
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
                      src: 'https://assets.yurika.design/tapcast/tapcastFlowNew.png',
                      alt: 'Tapcast Flowchart',
                      className: 'proj-img',
                      style: { width: '100%' }
                    }}
                    zoomImage={{
                      src: 'https://assets.yurika.design/tapcast/tapcastFlowNew.png',
                      alt: 'Tapcast Flowchart',
                      className: 'proj-img'
                    }}
                  /><br></br>
                  <span className="img-caption">Signup to payment flowchart</span> <br></br><br></br>
                  To be competitive, I also felt that our platform needed to be rebranded. I aimed for a modern, clean, simple look while being respectful of the previous design. I first redesigned the logo:<br></br><br></br>
                  <Row>
                    <Col xs="6">
                      <CardImg top width="100%" src="https://assets.yurika.design/tapcast/fullwgrid.png" className="proj-img no-shadow"></CardImg>
                    </Col>
                    <Col xs="6">
                      <CardImg top width="100%" src="https://assets.yurika.design/tapcast/fullLogo.png" className="proj-img no-shadow"></CardImg>
                    </Col>
                  </Row>
                  <span className="img-caption">new tapcast logos</span> <br></br><br></br>
                  With logo design complete, I started to iteratively build the final design.<br></br><br></br>
                  <Row>
                    <Col md="6">
                      <ImageZoom
                        image={{
                          src: 'https://assets.yurika.design/tapcast/mockupBW.png',
                          alt: 'Tapcast Mockup BW',
                          className: 'proj-img',
                          style: { width: '100%' }
                        }}
                        zoomImage={{
                          src: 'https://assets.yurika.design/tapcast/mockupBW.png',
                          alt: 'Tapcast Mockup BW',
                          className: 'proj-img'
                        }}
                      /><br></br>
                    </Col>
                    <Col md="6">
                      <ImageZoom
                        image={{
                          src: 'https://assets.yurika.design/tapcast/mockupColor.png',
                          alt: 'Tapcast Mockup Color',
                          className: 'proj-img',
                          style: { width: '100%' }
                        }}
                        zoomImage={{
                          src: 'https://assets.yurika.design/tapcast/mockupColor.png',
                          alt: 'Tapcast Mockup Color',
                          className: 'proj-img'
                        }}
                      /><br></br>
                    </Col>
                  </Row>
                  <span className="img-caption">Mockup iterations</span><br></br>
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">04.</div> The Solution</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  {/* <a href="https://invis.io/7FQVFPD92ZM"><span className="tapcast-links">Click here to view the full prototype</span></a><br></br><br></br> */}
                  <ImageZoom
                      image={{
                        src: 'https://assets.yurika.design/tapcast/tapcast-platform.png',
                        alt: 'Dashboard',
                        className: 'proj-img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'https://assets.yurika.design/tapcast/tapcast-platform.png',
                        alt: 'Dashboard',
                        className: 'proj-img'
                      }}
                  /><br></br>
                  <span className="img-caption">dashboard</span> <br></br><br></br>
                  <ImageZoom
                      image={{
                        src: 'https://assets.yurika.design/tapcast/tapcast-landing.png',
                        alt: 'Landing Page',
                        className: 'proj-img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'https://assets.yurika.design/tapcast/tapcast-landing.png',
                        alt: 'Landing Page',
                        className: 'proj-img'
                      }}
                  /><br></br>
                  <span className="img-caption">landing page</span> <br></br><br></br>
                  <ImageZoom
                      image={{
                        src: 'https://assets.yurika.design/tapcast/tapcast-signup.png',
                        alt: 'Signup Page',
                        className: 'proj-img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'https://assets.yurika.design/tapcast/tapcast-signup.png',
                        alt: 'Signup Page',
                        className: 'proj-img'
                      }}
                  /><br></br>
                  <span className="img-caption">sign up</span> <br></br><br></br>
                  <ImageZoom
                      image={{
                        src: 'https://assets.yurika.design/tapcast/tapcast-audience.png',
                        alt: 'Audience Page',
                        className: 'proj-img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'https://assets.yurika.design/tapcast/tapcast-audience.png',
                        alt: 'Audience Page',
                        className: 'proj-img'
                      }}
                  /><br></br>
                  <span className="img-caption">audience page</span> <br></br><br></br>
                  <ImageZoom
                      image={{
                        src: 'https://assets.yurika.design/tapcast/tapcast-payment.png',
                        alt: 'Payment Page',
                        className: 'proj-img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'https://assets.yurika.design/tapcast/tapcast-payment.png',
                        alt: 'Payment Page',
                        className: 'proj-img'
                      }}
                  /><br></br>
                  <span className="img-caption">payment</span> <br></br><br></br>
                  <div className="text-center">
                    <a href="https://invis.io/7FQVFPD92ZM"><span className="highlight" id="btn-tapcast"><span className="btn tapcast-btn">Click here to view the full prototype</span></span></a><br></br>
                  </div><br></br><br></br>
                  As I stated prior, the focus of this redesign was new user journey and payment flow. Here are the summary of changes that this redesign tackled:<br></br><br></br>
                  <ul className="tapcast-painpoints" id="tapcast-solution">
                    <li>Addition of <span className="chunky-underline" id="tapcast-underline-color">Get Started checklist</span> (previously, there were none - we simply dropped the user to a sample heatmap page on the platform)</li>
                    <li>Selection of ad accounts happens during the onboarding process and not <span className="chunky-underline" id="tapcast-underline-color">after</span> they were dropped off in the sample heatmaps dashboard</li>
                    <li>User can opt-in to watching a <span className="chunky-underline" id="tapcast-underline-color">tutorial video</span> prior to viewing the platform in its entirety - reducing complexity</li>
                    <li>Audience map page gives users <span className="chunky-underline" id="tapcast-underline-color">clearer steps</span> on what they'll have to do before seeing their heatmaps (i.e. first, select an ad account, second, select an audience, third, submit query and wait for the map to load)</li>
                    <li>Incorporated <span className="chunky-underline" id="tapcast-underline-color">tooltips</span> for marketing terms such as Cost per Acquistion</li>
                    <li>Added a <span className="chunky-underline" id="tapcast-underline-color">Congratulations modal</span> for users who completed the Get Started checklist and <span className="chunky-underline" id="tapcast-underline-color">a large CTA</span> to upgrade one's account</li>
                </ul>
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-color">05.</div> The End</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                Although this project never took off as part of a development effort (there wasn't enough engineering bandwidth to kickstart this project), <span className="chunky-underline" id="tapcast-underline-color">the project was extremely valuable in growing my capabilities as a designer and navigate through business and engineering constraints.</span><br></br><br></br>
                For example, knowing engineering resources are generally scarce, I knew I had to craft a redesign that kept custom UI elements at a minimum and reuse resources from a predefined component library (<a href="https://material-ui.com"><span className="tapcast-links">Material UI</span></a>).
                In addition, I had to strictly abide by Facebook app review policies and formulate UX flows that satisfied those requirements (see <a href="https://developers.facebook.com/docs/facebook-login/best-practices/"><span className="tapcast-links">Facebook Login Best Practices</span></a>). <br></br><br></br>
                <span className="chunky-underline" id="tapcast-underline-color">Despite the project not being fully realized in the product design, there were components that made into the live application.</span> Notably, the Get Started checklist, Create Audience button, Select Ad Account modal, and Welcome to Tapcast introduction video are still incorporated into the design today.
                 Overall, not only did this redesign grow me as a designer, but it also helped me to understand the complexities involving platform UI overhaul, and the business importance of a frictionless user onboarding flow.<br></br><br></br>
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header" id="tapcast-secondary">key takeaways</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  <ol className="takeaways">
                    <li>Embrace constraints and challenge yourself.</li>
                    <li>Collaborate with stakeholders and work cross-functionally to understand the overarching pain points of customers.</li>
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