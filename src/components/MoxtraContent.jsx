import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardTitle, CardImg, CardText, CardGroup, CardBody } from 'reactstrap';
import AOS from 'aos';
import ImageZoom from 'react-medium-image-zoom';

import MoxtraSolutionAlt from './MoxtraSolutionAlt';

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
              <CardText>Sketch, Paper & Pen</CardText>
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
                <a href="https://moxtra.com/"><span className="moxtra-links">Moxtra</span></a> is an embeddable collaboration solution that allows its users to seamlessly power any application with collaboration features - messaging, file sharing, document sharing, video conferencing/chat, etc. It is widely available on iOS, Android, desktop, and web. In addition, it is a mobile-first company with a native iOS app and they develop APIs and SDKs that integrate to other mobile applications.<br></br><br></br> 
                During my time as a UI/UX design developer intern, we identified that the onboarding is one of the pain points to the user experience. As my time at Moxtra approached the end, I was tasked <span className="chunky-underline" id="moxtra-underline-color">to improve and visually enhance the onboarding of Moxtra’s mobile application</span>.
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers moxtra-color">02.</div> The Problem</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              <span className="chunky-underline" id="moxtra-underline-color">Good app onboarding is essential for user attention but Moxtra was losing many.</span> As this assignment was assigned to me near the end of my internship, I unfortunately never had the opportunity to collect real metrics of this issue. However, my manager did state that the design team never got the opportunity to focus on onboarding and therefore, could be better.<br></br><br></br> 
              <CardImg top width="100%" src="https://assets.yurika.design/moxtra/moxtraOriginal.png" className="proj-img no-shadow"></CardImg> <br></br>
              <span className="img-caption">Moxtra's Original Onboarding</span> <br></br><br></br>
              So to get a real sense of how the current onboarding was performing, I conducted three interviews with potential users who have never used/heard of Moxtra before. Itemized below is feedback that I received:
              <ul className="moxtra-painpoints">
                <div className="numbers moxtra-color" id="good">The Good</div>
                <li>Onboarding process, from start to finish, is quick and short</li>
                <li>Nice graphics on the onboarding carousel</li>
                <li>Sign up process is quick and painless with the ability to continue with Facebook, Google, and/or SSO</li>
                <div className="numbers moxtra-color" id="bad">The Bad</div>
                <li>100% of the users stated that app features and navigation labels were ambiguous and nonintuitive</li>
                <li>Most agreed that in-app onboarding provides little to no clarity on what the product is</li>
                <li>75% of users felt that the application's visual design is plain and could use an update</li>
                <li>One user felt that the "Add Avatar" and "Your Plan" screens appear too soon in the app onboarding process</li>
              </ul>
              <br></br>
              To summarize, the new onboarding flow of Moxtra’s iOS app required clearer messaging, better onboarding cues, and more vibrant visual design while achieving the overall goal of increasing user attention during the onboarding process.
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers moxtra-color">03.</div> The Process</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              Once I have an idea in regards to the overarching goal and user pain points, <span className="chunky-underline" id="moxtra-underline-color">my first step is to always start out with pen and paper</span>. Here’s the result from my first brainstorming session:<br></br><br></br> 
              <ImageZoom
                image={{
                  src: 'https://assets.yurika.design/moxtra/brainstorming.jpg',
                  alt: 'Brainstorming',
                  className: 'proj-img',
                  style: { width: '100%' }
                }}
                zoomImage={{
                  src: 'https://assets.yurika.design/moxtra/brainstorming.jpg',
                  alt: 'Brainstorming',
                  className: 'proj-img'
                }}
              /><br></br><br></br>
              Admittedly, I realized after my first few sketches that I was getting ahead of myself. <span className="chunky-underline" id="moxtra-underline-color">In-app onboarding serves no purpose if the value of the application is not properly conveyed to users.</span> As there are many competitors in Moxtra’s space, I felt that a breakdown of Moxtra vs. its competitors was necessary prior to proceeding. This would also help me determine which competitive advantages of the platform I should showcase to new users throughout the onboarding process.<br></br><br></br>
              <ImageZoom
                image={{
                  src: 'https://assets.yurika.design/moxtra/moxtraCompetition.png',
                  alt: 'Moxtra vs. Competition',
                  className: 'proj-img',
                  style: { width: '100%' }
                }}
                zoomImage={{
                  src: 'https://assets.yurika.design/moxtra/moxtraCompetition.png',
                  alt: 'Moxtra vs. Competition',
                  className: 'proj-img'
                }}
              /><br></br>
              <span className="img-caption">Moxtra vs. Competition</span> <br></br><br></br>
              With the help of the above table, I dissected and revamped the original onboarding cards for clearer and stronger message.<br></br><br></br>
              <ImageZoom
                image={{
                  src: 'https://assets.yurika.design/moxtra/lo-fiCards.png',
                  alt: 'Moxtra Lo-fi',
                  className: 'proj-img no-shadow',
                  style: { width: '100%' }
                }}
                zoomImage={{
                  src: 'https://assets.yurika.design/moxtra/lo-fiCards.png',
                  alt: 'Moxtra Lo-fi',
                }}
              /><br></br>
              <span className="img-caption">Lo-fi Onboarding Carousel</span> <br></br><br></br>
              From there, I developed the rest of the mockup:<br></br><br></br>
              <CardImg top width="100%" src="https://assets.yurika.design/moxtra/lo-fiWhole.png" className="proj-img no-shadow"></CardImg> <br></br>
              <span className="img-caption">Complete Lo-fi Mockup</span> <br></br><br></br>
              <CardImg top width="100%" src="https://assets.yurika.design/moxtra/moxtraHi.png" className="proj-img no-shadow"></CardImg> <br></br>
              <span className="img-caption">Hi-fi mockup: Let's not forget color and glamour!</span> <br></br><br></br>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers moxtra-color">04.</div> The Solution</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <MoxtraSolutionAlt /><br></br><br></br>
                Few things to note about the final implementation -
                <ul className="moxtra-painpoints" id="moxtra-solution">
                  <li>Names and descriptions are now clearer vs. the original (e.g. Meet to Calendar)</li>
                  <li>Verification is now <span className="chunky-underline" id="moxtra-underline-color">completed via SMS instead of email</span> - it's a mobile app, why not text?</li>
                  <li>Emphasized sign up and de-emphasized log in on the onboarding carousel screens</li>
                  <li>Updated visually to <span className="chunky-underline" id="moxtra-underline-color">dark mode</span></li>
                  <li>Removed "Add Avatar" and "Your Plan" screens from onboarding</li>
                </ul>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers moxtra-color">05.</div> The End</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              <span className="chunky-underline" id="moxtra-underline-color">As my first independent design project, there are a slew of items I would change if I were to tackle this problem now.</span> For example, the icons are notably too rounded for a business application. Sharper edges for this icon library would have been better suited for this visual representation of a business like Moxtra’s. 
              Using fewer variants of colors would have also helped this application to look more “serious”. In terms of user flow, adding a way to keep user engagement <span className="chunky-underline" id="moxtra-underline-color">after</span> the user leaves the application would have increased user engagement over time. Perhaps adding incentives for users to return to the application (like <a href="https://www.starbucks.com/starbucks-rewards"><span className="moxtra-links">Starbucks Rewards</span></a>) would have driven user retention. One idea I would love to have implemented is that there would be a bot added as one of the contacts when a user first signs up and that bot could be the driver for a user to keep coming back to Moxtra. I’d like to think this bot could be similar to a friend telling you to check out a new app or a clothing line - prompting you to do so. <br></br><br></br>
              <span className="chunky-underline" id="moxtra-underline-color">Despite the flaws, I took plenty away from this project that helped me to become a better designer and developer.</span> This internship gave me a solid grasp on the fundamentals of design and as a self-taught learner, this was invaluable to me. My manager taught me the iterative processes and organizing assets in Sketch which I still use in both in design and development today. <span className="chunky-underline" id="moxtra-underline-color">Thank you, Moxtra!</span>
              </Media>
            </Col>
          </Row>
          <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header" id="moxtra-secondary">key takeaways</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  <ol className="takeaways">
                    <li>Don't be afraid to backtrack and try again.</li>
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