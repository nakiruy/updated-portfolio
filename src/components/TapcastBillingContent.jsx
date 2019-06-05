import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardImg, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import AOS from 'aos';
import ImageZoom from 'react-medium-image-zoom';

class TapcastBillingContent extends React.Component {
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
        <Jumbotron className="tapcast-billing-projpic" fluid></Jumbotron>
        <CardGroup className="proj-brief" id="tapcast-brief">
          <Card className="text-left">
            <CardBody data-aos="fade-up">
              <CardTitle className="tapcast-billing-color">Role</CardTitle>
              <CardText>UI/UX, PM</CardText>
            </CardBody>
          </Card>
          <Card className="text-left">
            <CardBody data-aos="fade-up">
              <CardTitle className="tapcast-billing-color">Duration</CardTitle>
              <CardText>Nov 2018</CardText>
            </CardBody>
          </Card>
          <Card className="text-left">
            <CardBody data-aos="fade-up">
              <CardTitle className="tapcast-billing-color">Tools</CardTitle>
              <CardText>Sketch, Asana, Paper & Pen</CardText>
            </CardBody>
          </Card>
        </CardGroup>
        <hr></hr>
        <Col className="tapcast-process">
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers tapcast-billing-color">01.</div>The Beginning</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <a href="https://www.tapcast.io"><span className="tapcast-billing-links">Tapcast</span></a> is a data-driven, marketing intelligence platform aimed to help marketers to understand and scale their Facebook audiences. <br></br><br></br>
                Prior to Q4 2018, we frequently changed billing plans (in fact, we audited internally and found that we changed our billing model six times since the beginning of the year) and desperately needed a more permanent pricing model for our SaaS platform. <br></br><br></br>
                In addition to the ever-changing landscape of Facebook after the Cambridge Analytica scandal, we were faced with a challenge of coming up with a billing model that satisfied Facebook, as well as our internal teams and customers. As a TPM, I established the user flow, designed mockups, and managed this project from inception to deployment. <br></br>             
              </Media>
            </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-billing-color">02.</div> The Problem</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  One of the biggest problems were born out of our own doing. As briefly mentioned above, we had implemented six different pricing models within the year. These changes ranged from number of ad accounts to subscription pricing and from plan names to whether or not we should charge clients based on Facebook ad spend. As changes accumulated, it was becoming increasingly difficult to keep up with them. We were spending a lot of time keeping track of legacy billing models which led to a massive workload debt in operations and development sides of the business.  <br></br><br></br>
                  Moreover, despite the efforts and pivots, we discovered via funnel analysis that our total conversion rate of purchases was less than ideal. 
                  [Insert funnel analysis pic here]
                  [Insert caption]
                  Needless to say, we strongly felt that we could do better. 
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-billing-color">03.</div> The Process</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  To kick start the redesign, I decided to research our competitors. Fortunately, Facebook has a <a href="https://www.facebook.com/business/solutions-explorer/"><span className="tapcast-billing-links">handy directory</span></a> of their marketing partners which provides a quick overview of each company. This expedited my search for identifying Tapcast's closest competition.<br></br><br></br>
                  After comparing and contrasting a handful of companies as well as coupling user sessions/gathering feedbacks from our customer success team, it was clear that <span className="chunky-underline" id="tapcast-billing-underline-color">our onboarding wasn't enough</span>.
                  We provided no clear path on how to utilize the platform with zero cues to prompt users to act.<br></br><br></br> 
                  Moreover, we concluded internally that Tapcast as a product requires a heavy ramp-up period and extensive onboarding. Thus, keeping in mind the high priority business goal of converting as many new users as possible, I decided <span className="chunky-underline" id="tapcast-billing-underline-color">to focus on the new user journey and payment flow</span> in this redesign.<br></br><br></br> 
                  <ImageZoom
                    image={{
                      src: 'http://assets.yurika.design/tapcast/tapcastFlowNew.png',
                      alt: 'Tapcast Flowchart',
                      className: 'proj-img',
                      style: { width: '100%' }
                    }}
                    zoomImage={{
                      src: 'http://assets.yurika.design/tapcast/tapcastFlowNew.png',
                      alt: 'Tapcast Flowchart',
                      className: 'proj-img'
                    }}
                  /><br></br>
                  <span className="img-caption">Signup to payment flowchart</span> <br></br><br></br>
                  To be competitive, I also felt that our platform needed to be rebranded. I aimed for a modern, clean, simple look while being respectful of the previous design. I first redesigned the logo:<br></br><br></br>
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
                          className: 'proj-img',
                          style: { width: '100%' }
                        }}
                        zoomImage={{
                          src: 'http://assets.yurika.design/tapcast/mockupBW.png',
                          alt: 'Tapcast Mockup BW',
                          className: 'proj-img'
                        }}
                      /><br></br>
                    </Col>
                    <Col md="6">
                      <ImageZoom
                        image={{
                          src: 'http://assets.yurika.design/tapcast/mockupColor.png',
                          alt: 'Tapcast Mockup Color',
                          className: 'proj-img',
                          style: { width: '100%' }
                        }}
                        zoomImage={{
                          src: 'http://assets.yurika.design/tapcast/mockupColor.png',
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
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-billing-color">04.</div> The Solution</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  {/* <a href="https://invis.io/7FQVFPD92ZM"><span className="tapcast-billing-links">Click here to view the full prototype</span></a><br></br><br></br> */}
                  <ImageZoom
                      image={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-platform.png',
                        alt: 'Dashboard',
                        className: 'proj-img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-platform.png',
                        alt: 'Dashboard',
                        className: 'proj-img'
                      }}
                  /><br></br>
                  <span className="img-caption">dashboard</span> <br></br><br></br>
                  <ImageZoom
                      image={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-landing.png',
                        alt: 'Landing Page',
                        className: 'proj-img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-landing.png',
                        alt: 'Landing Page',
                        className: 'proj-img'
                      }}
                  /><br></br>
                  <span className="img-caption">landing page</span> <br></br><br></br>
                  <ImageZoom
                      image={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-signup.png',
                        alt: 'Signup Page',
                        className: 'proj-img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-signup.png',
                        alt: 'Signup Page',
                        className: 'proj-img'
                      }}
                  /><br></br>
                  <span className="img-caption">sign up</span> <br></br><br></br>
                  <ImageZoom
                      image={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-audience.png',
                        alt: 'Audience Page',
                        className: 'proj-img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-audience.png',
                        alt: 'Audience Page',
                        className: 'proj-img'
                      }}
                  /><br></br>
                  <span className="img-caption">audience page</span> <br></br><br></br>
                  <ImageZoom
                      image={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-payment.png',
                        alt: 'Payment Page',
                        className: 'proj-img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: 'http://assets.yurika.design/tapcast/tapcast-payment.png',
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
                    <li>Addition of <span className="chunky-underline" id="tapcast-billing-underline-color">Get Started checklist</span> (previously, there were none - we simply dropped the user to a sample heatmap page on the platform)</li>
                    <li>Selection of ad accounts happens during the onboarding process and not <span className="chunky-underline" id="tapcast-billing-underline-color">after</span> they were dropped off in the sample heatmaps dashboard</li>
                    <li>User can opt-in to watching a <span className="chunky-underline" id="tapcast-billing-underline-color">tutorial video</span> prior to viewing the platform in its entirety - reducing complexity</li>
                    <li>Audience map page gives users <span className="chunky-underline" id="tapcast-billing-underline-color">clearer steps</span> on what they'll have to do before seeing their heatmaps (i.e. first, select an ad account, second, select an audience, third, submit query and wait for the map to load)</li>
                    <li>Incorporated <span className="chunky-underline" id="tapcast-billing-underline-color">tooltips</span> for marketing terms such as Cost per Acquistion</li>
                    <li>Added a <span className="chunky-underline" id="tapcast-billing-underline-color">Congratulations modal</span> for users who completed the Get Started checklist and <span className="chunky-underline" id="tapcast-billing-underline-color">a large CTA</span> to upgrade one's account</li>
                </ul>
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-billing-color">05.</div> The End</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                Although this project never took off to be in a development sprint (as with any startup, engineering resources was scarce), <span className="chunky-underline" id="tapcast-billing-underline-color">this project was extremely valuable to growing my capabilities to design with numerous constraints.</span><br></br><br></br>
                Due to limited engineering resources, one of the biggest constraints in implementing this project was overhauling the existing platform design while keeping the number of custom UI elements minimal but still redesign the platform to look vastly different from its previous form. I was also limited to using assets from <a href="https://material-ui.com"><span className="tapcast-billing-links">Material UI</span></a> which added to the challenge.
                Last but not least, I had to strictly abide with Facebook app review policies and formulate UX flows that satisfied those requirements as well. <br></br><br></br>
                As you may have noticed, there are a handful of scenarios that I did not flesh out during the creation of this project. That is, what if a user’s free trial expires before they upgrade? What if a new user decides not to follow the Get Started checklist? Is the platform intuitive enough for a new user to understand without going through the checklist? What if they do not have a pre-existing ad account on Facebook? Needless to say, I hope to tackle these issues when this project is incorporated into the product roadmap.<br></br><br></br>
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header" id="tapcast-billing-secondary">key takeways</h6>
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

export default TapcastBillingContent