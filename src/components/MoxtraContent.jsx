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
                <a href="https://moxtra.com/"><span className="moxtra-links">Moxtra</span></a> is an embeddable, collaboration solution that allows its users to seamlessly integrate itself to power another software with collaboration features - messaging, file sharing, document sharing, video conferencing/chat, etc. It is widely available in iOS, Android, desktop, and web. Their primary business focus is mobile first with Moxtra having their own native iOS app and featuring their own APIs and SDKs that allow integrations on other mobile platforms.<br></br><br></br> 
                During my time as a UI/UX Design Developer intern, we identified one of the pain points to the user experience to be the onboarding. As my time at Moxtra came to a close, I was tasked <span className="chunky-underline" id="moxtra-underline-color">to improve and re-envision the onboarding of Moxtra’s mobile application</span>.
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers moxtra-color">02.</div> The Challenge</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              Frankly, when I signed up for Moxtra iOS app for the first time, I was quite unclear on what Moxtra offered out of the box even after going through the onboarding. Personally, it was somewhat abrupt in its flow in addition to insufficient context provided to a new user about the product.<br></br><br></br> 
              [ADD ORIGINAL ONBOARDING FLOW HERE]<br></br><br></br> 
              Of course, to confirm my initial impressions, I conducted a series on user interviews who have never used/heard of Moxtra before. Here are high-level resounding themes that were brought up during interviews:<br></br><br></br> 
              [ADD THEMES VIA NUMBER POINTS HERE]<br></br><br></br> 
              Moxtra is a product with multiple deployments so it was essential to formulate a user flow that was uniquely built for mobile for it to be any effective. For this flow, I was targeting these two categories of users:<br></br><br></br> 
              [ADD PERSONAS HERE]<br></br><br></br> 
              To summarize, the onboarding flow of Moxtra’s native iOS application required clearer messaging, better onboarding cues, and more consistent visual design.
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers moxtra-color">03.</div> The Process</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
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
        </Col>
    </Container>
    );
  }
};

export default MoxtraContent