import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardTitle, CardImg, CardText, CardGroup, CardBody } from 'reactstrap';
import AOS from 'aos';

import MoxtraSolution from './MoxtraSolution';

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
                During my time as a UI/UX Design Developer intern, we identified one of the pain points to the user experience is the onboarding. As my time at Moxtra approached the end, I was tasked <span className="chunky-underline" id="moxtra-underline-color">to improve and visually enhance the onboarding of Moxtra’s mobile application</span>.
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers moxtra-color">02.</div> The Problem</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              <span className="chunky-underline" id="moxtra-underline-color">Good app onboarding is essential for user attention but Moxtra's was losing mine.</span> When I signed up for Moxtra iOS app for the first time, I found the experience stale and unclear on what Moxtra offered out of the box even after completing the in-app onboarding. I assumed that a lot of user may have felt the same.<br></br><br></br> 
              <CardImg top width="100%" src="http://assets.yurika.design/moxtra/moxtraOriginal.png" className="proj-img no-shadow"></CardImg> <br></br>
              <span className="img-caption">Moxtra's Original Onboarding</span> <br></br><br></br>
              Of course, to confirm my assumptions, I conducted series of user interviews who have never used/heard of Moxtra before. A lot of other people's sentiments resonated with mine. Itemized below are feedbacks that I jotted down during my research:
              <ul className="moxtra-painpoints">
                <div className="numbers moxtra-color" id="good">The Good</div>
                <li>Onboarding process, from start to finish, is quick and short</li>
                <li>Nice graphics on the onboarding carousel</li>
                <li>Sign up process is quick and painless with the ability to continue with Facebook, Google, and/or SSO</li>
                <div className="numbers moxtra-color" id="bad">The Bad</div>
                <li>Ambiguous and nonintuitive names of app features and navigation labels</li>
                <li>In-app onboarding provides little to no clarity on what the product is</li>
                <li>Application's visual design is plain and could use an update</li>
                <li>"Add Avatar" and "Your Plan" screens appears too soon in the app onboarding process</li>
              </ul>
              <br></br>
              To ensure focus, I created two new user personas:<br></br><br></br> 
              <CardImg top width="100%" src="http://assets.yurika.design/moxtra/moxtraMatthew.png" className="proj-img"></CardImg> <br></br><br></br>
              <CardImg top width="100%" src="http://assets.yurika.design/moxtra/moxtraPaul.png" className="proj-img"></CardImg> <br></br>
              <span className="img-caption">User personas for Moxtra</span> <br></br><br></br>
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
              Now that I had an idea in regards to the overarching goal and user pain points, <span className="chunky-underline" id="moxtra-underline-color">my first step is to always start out with pen and paper</span>. Here’s the result from my first brainstorming session:<br></br><br></br> 
              <CardImg top width="100%" src="http://assets.yurika.design/moxtra/brainstorming.jpg" className="proj-img"></CardImg> <br></br><br></br>
              Admittedly, I realized after my first few sketches that I was getting ahead of myself. <span className="chunky-underline" id="moxtra-underline-color">In-app onboarding serves no purpose if the value of the application is not properly conveyed to users.</span> As there are many competitors in Moxtra’s space, I felt that a breakdown of Moxtra vs. its competitors was necessary prior to proceeding. This would also help me determine which competitive advantages of the platform I should showcase to new users throughout the onboarding process.<br></br><br></br>
              <CardImg top width="100%" src="http://assets.yurika.design/moxtra/moxtraCompetition.png" className="proj-img"></CardImg> <br></br>
              <span className="img-caption">Moxtra vs. Competition</span> <br></br><br></br>
              With the help of the above table, I dissected and revamped the original onboarding cards for a clearer and stronger messaging.<br></br><br></br>
              <CardImg top width="100%" src="http://assets.yurika.design/moxtra/lo-fiCards.png" className="proj-img no-shadow"></CardImg><br></br>
              <span className="img-caption">Lo-fi Onboarding Carousel</span> <br></br><br></br>
              From there, I developed the rest of the mockup:<br></br><br></br>
              <CardImg top width="100%" src="http://assets.yurika.design/moxtra/lo-fiWhole.png" className="proj-img no-shadow"></CardImg> <br></br>
              <span className="img-caption">Complete Lo-fi Mockup</span> <br></br><br></br>
              <CardImg top width="100%" src="http://assets.yurika.design/moxtra/moxtraHi.png" className="proj-img no-shadow"></CardImg> <br></br>
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
                <MoxtraSolution /><br></br><br></br>
                Few things to note about the final implementation, 
                <ul className="moxtra-painpoints" id="moxtra-solution">
                  <li>Names and descriptions are now clearer vs. the original (e.g. Meet to Calendar)</li>
                  <li>Verification is now <span className="chunky-underline" id="moxtra-underline-color">completed via SMS instead of email</span> - it's a mobile app, why not text?</li>
                  <li>Emphasized sign up and de-emphasized log in on the onboarding carousel screens</li>
                  <li>Updated visually to <span className="chunky-underline" id="moxtra-underline-color">trendy dark mode</span></li>
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
              <span className="chunky-underline" id="moxtra-underline-color">As my first independent design project, there are slew of items I would change if I were to tackle this problem now.</span> For example, the icons are notably too rounded for a business application. Sharper edges for this icon library would have been better suited for this visual representation of a business like Moxtra’s. 
              Using less variants of colors would have also helped this application to look more “serious”. In terms of user flow, adding a way to keep user engagement <span className="chunky-underline" id="moxtra-underline-color">after</span> user leaves the application would have increased user engagement over time. Perhaps adding incentives for users to return to the application (like <a href="https://www.starbucks.com/starbucks-rewards"><span className="moxtra-links">Starbucks Rewards</span></a>) would have drove user retention. One idea I would love to have implemented is that there would be a bot added as one of the contacts when a user first signs up and that bot could be the driver for a user to keep coming back to Moxtra. I’d like to think this bot could be similar to a friend telling you to check out a new app or a clothing line - prompting you to do so. <br></br><br></br>
              <span className="chunky-underline" id="moxtra-underline-color">Despite the flaws, I took plenty away from this project that helped me to become a better designer and developer.</span> This internship gave me a solid grasp on the fundamentals of design and as a self-taught learner, this was invaluable to me. My manager taught me the iterative processes and organizing assets in Sketch which I still use in both in design and development today. <span className="chunky-underline" id="moxtra-underline-color">Thank you, Moxtra!</span>
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