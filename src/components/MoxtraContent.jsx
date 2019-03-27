import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import AOS from 'aos';

class MoxtraContent extends React.Component {
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
      <Jumbotron className= "moxtra-projpic" fluid></Jumbotron>
          <CardGroup className="proj-brief" id="moxtra-brief">
          <Card className="text-left" data-aos="fade-up">
            <CardBody>
              <CardTitle className="moxtra-color">Role</CardTitle>
              <CardText>UI/UX, Visual Design, Research</CardText>
            </CardBody>
          </Card>
          <Card className="text-left" data-aos="fade-up">
            <CardBody>
              <CardTitle className="moxtra-color">Duration</CardTitle>
              <CardText>Jan - Feb 2018</CardText>
            </CardBody>
          </Card>
          <Card className="text-left" data-aos="fade-up">
            <CardBody>
              <CardTitle className="moxtra-color">Tools</CardTitle>
              <CardText>Sketch, Balsamiq, Asana, Paper & Pen</CardText>
            </CardBody>
          </Card>
        </CardGroup>
        <hr></hr>
        <Col className="moxtra-process">
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers moxtra-color">01.</div> The Beginning</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <a href="https://moxtra.com/"><span className="moxtra-links">Moxtra</span></a> is an embeddable, collaboration solution that allows its users to seamlessly power any application with collaboration features - messaging, file sharing, document sharing, video conferencing/chat, etc. It is widely available on iOS, Android, desktop, and web. They are a mobile-first company with a native iOS app and develops APIs and SDKs that integrates to other mobile applications.<br></br><br></br> 
                During my time as a UI/UX Design Developer intern, we identified one of the pain points to the user experience is the onboarding. As my time at Moxtra came near, I was tasked to <span className="chunky-underline" id="moxtra-underline-color">improve and re-envision the onboarding of Moxtra’s mobile application</span>.
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers moxtra-color">02.</div> The Challenge</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              <span className="chunky-underline" id="moxtra-underline-color">Good app onboarding is essential for user attention but Moxtra's was losing mine.</span> Frankly, when I signed up for Moxtra iOS app at the start of my internship, I was unclear on what Moxtra offered out of the box even after going through the in-app onboarding. Personally, the onboarding was insufficient to understand the value of the product as a new user.<br></br><br></br> 
              [ADD ORIGINAL ONBOARDING FLOW HERE]<br></br><br></br> 
              Of course, to confirm my initial impressions, I conducted a series on user interviews who have never used/heard of Moxtra before. A lot of other people's user sentiments resonated with mine. Here are high-level feedback that were brought up during interviews:
              <ul className="moxtra-painpoints">
                <div className="numbers moxtra-color">The Good</div>
                <li>Onboarding time, start to finish, is quick and short</li>
                  add quote
                <li>Nice graphics on the onboarding carousel</li>
                  add quote
                <li>Ability to sign up via Facebook, Google, and SSO is helpful</li>
                  add quote
                <div className="numbers moxtra-color">The Bad</div>
                <li>Ambiguous and nonintuitive names of app features and navigation labels</li>
                  add quote
                <li>In-app onboarding provides little to no clarity on what the product offers</li>
                  add quote
                <li>Application's visual design is plain and could use an update</li>
                  add quote
                <li>Add Avatar and Your Plan screens emerges too soon in the app onboarding process</li>
                add quote
              </ul>
              <br></br>
              To ensure focus, I verified that I was targeting these two categories of new users:<br></br><br></br> 
              [ADD PERSONAS HERE]<br></br><br></br> 
              To summarize, the new onboarding flow of Moxtra’s iOS app required clearer messaging, better onboarding cues, and more vibrant visual design while achieving an overall goal to increase user attention during onboarding process.
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers moxtra-color">03.</div> The Process</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              Now I had confirmed the overarching goal and user pain points, my first step is to always start out with pen and paper. Here’s the result from my first go:<br></br><br></br> 
              [ADD SKETCHES WITH MULTIPLE OPTIONS]<br></br><br></br>
              In-app onboarding serves no purpose if the value of the application is not properly conveyed to users. As there are many competitors in Moxtra’s space, I felt that a breakdown of Moxtra vs. competitors was a necessity. This will also help me establish which portions of the platform I should showcase to new users throughout the onboarding process.<br></br><br></br>
              [ADD COMPETITIVE ANALYSIS TABLE HERE]<br></br><br></br>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers moxtra-color">04.</div> The Solution</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers moxtra-color">05.</div> The End</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
            </Col>
          </Row>
          <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header" id="moxtra-secondary">key takeways</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  <ol className="takeaways">
                    <li>Don't be afraid to ask questions.</li>
                    <li>Implementing dark mode is not as simple as it looks.</li>
                    <li>Expecting perfection is stupidity - strive for better and keep iterating.</li>
                  </ol>
                </Media>
              </Col>
            </Row>
        </Col>
    </Container>
    );
  }
};

export default MoxtraContent