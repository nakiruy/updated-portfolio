import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardTitle, CardImg, CardText, CardGroup, CardBody } from 'reactstrap';
import AOS from 'aos';
import ImageZoom from 'react-medium-image-zoom';

class GrouponReviewContent extends React.Component {
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
      <Jumbotron className= "groupon-projpic" fluid></Jumbotron>
        <hr></hr>
        <Col className="groupon-process">
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>Quick Facts & Background</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <a href="https://groupon.com/"><span className="groupon-links">Groupon</span></a> is an online marketplace that connects people with local businesses by offering discounts in activities, travel, goods, services, and more. As they put it, their mission is <span className="chunky-underline" id="groupon-underline-color">to be the daily habit in local commerce.</span><br></br><br></br> 
                According to their <a href="https://s22.q4cdn.com/731250486/files/doc_downloads/2019/Q1-2019-Fact-Sheet_Final.pdf"><span className="groupon-links">Q1 2019 Fact Sheet</span></a>, they currently have 47.2 million active users with 20% of user traffic stemming from desktop. Their primary users are comprised of college-educated, urban women ranging from ages 25 to 44 and secondary users being early adopters with a sizeable disposable income (<a href="https://www.feedough.com/how-does-groupon-make-money-groupon-business-model/"><span className="groupon-links">source</span></a>). As business, Groupon generates revenue through commissions for every customers referred to merchant.<br></br><br></br>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>Grading Criteria</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                Prior to jumping into the app critique, I'd like to set the criteria so I can critique this application with focus and tact:
                <Media body>
                  <ul className="takeaways" id="groupon-criteria">
                    <li>How well does this application</li>
                    <li>Implementing dark mode is not as simple as it looks.</li>
                    <li>Expecting perfection is stupidity - strive for better and keep iterating.</li>
                  </ul><br></br><br></br>
                </Media>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>First Impressions</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              <span className="chunky-underline" id="groupon-underline-color">Good app onboarding is essential for user attention but Moxtra was losing many.</span> As this assignment was assigned to me near the end of my internship, I unfortunately never had the opportunity to collect real metrics of this issue. However, my manager did state that the design team never got the opportunity to focus on onboarding and therefore, could be better.<br></br><br></br> 
              <CardImg top width="100%" src="http://assets.yurika.design/moxtra/moxtraOriginal.png" className="proj-img no-shadow"></CardImg> <br></br>
              <span className="img-caption">Moxtra's Original Onboarding</span> <br></br><br></br>
              To summarize, the new onboarding flow of Moxtra’s iOS app required clearer messaging, better onboarding cues, and more vibrant visual design while achieving the overall goal of increasing user attention during the onboarding process.
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>Onboarding</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              Once I have an idea in regards to the overarching goal and user pain points, <span className="chunky-underline" id="groupon-underline-color">my first step is to always start out with pen and paper</span>. Here’s the result from my first brainstorming session:<br></br><br></br> 
              <ImageZoom
                image={{
                  src: 'http://assets.yurika.design/moxtra/brainstorming.jpg',
                  alt: 'Brainstorming',
                  className: 'proj-img',
                  style: { width: '100%' }
                }}
                zoomImage={{
                  src: 'http://assets.yurika.design/moxtra/brainstorming.jpg',
                  alt: 'Brainstorming',
                  className: 'proj-img'
                }}
              /><br></br><br></br>
              Admittedly, I realized after my first few sketches that I was getting ahead of myself. <span className="chunky-underline" id="groupon-underline-color">In-app onboarding serves no purpose if the value of the application is not properly conveyed to users.</span> As there are many competitors in Moxtra’s space, I felt that a breakdown of Moxtra vs. its competitors was necessary prior to proceeding. This would also help me determine which competitive advantages of the platform I should showcase to new users throughout the onboarding process.<br></br><br></br>
              <ImageZoom
                image={{
                  src: 'http://assets.yurika.design/moxtra/moxtraCompetition.png',
                  alt: 'Moxtra vs. Competition',
                  className: 'proj-img',
                  style: { width: '100%' }
                }}
                zoomImage={{
                  src: 'http://assets.yurika.design/moxtra/moxtraCompetition.png',
                  alt: 'Moxtra vs. Competition',
                  className: 'proj-img'
                }}
              /><br></br>
              <span className="img-caption">Moxtra vs. Competition</span> <br></br><br></br>
              With the help of the above table, I dissected and revamped the original onboarding cards for clearer and stronger message.<br></br><br></br>
              <ImageZoom
                image={{
                  src: 'http://assets.yurika.design/moxtra/lo-fiCards.png',
                  alt: 'Moxtra Lo-fi',
                  className: 'proj-img no-shadow',
                  style: { width: '100%' }
                }}
                zoomImage={{
                  src: 'http://assets.yurika.design/moxtra/lo-fiCards.png',
                  alt: 'Moxtra Lo-fi',
                }}
              /><br></br>
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
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>Information Architecture</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                Few things to note about the final implementation, 
                <ul className="moxtra-painpoints" id="moxtra-solution">
                  <li>Names and descriptions are now clearer vs. the original (e.g. Meet to Calendar)</li>
                  <li>Verification is now <span className="chunky-underline" id="groupon-underline-color">completed via SMS instead of email</span> - it's a mobile app, why not text?</li>
                  <li>Emphasized sign up and de-emphasized log in on the onboarding carousel screens</li>
                  <li>Updated visually to <span className="chunky-underline" id="groupon-underline-color">dark mode</span></li>
                  <li>Removed "Add Avatar" and "Your Plan" screens from onboarding</li>
                </ul>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>UI/Interaction Design</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              <span className="chunky-underline" id="groupon-underline-color">As my first independent design project, there are a slew of items I would change if I were to tackle this problem now.</span> For example, the icons are notably too rounded for a business application. Sharper edges for this icon library would have been better suited for this visual representation of a business like Moxtra’s. 
              Using fewer variants of colors would have also helped this application to look more “serious”. In terms of user flow, adding a way to keep user engagement <span className="chunky-underline" id="groupon-underline-color">after</span> the user leaves the application would have increased user engagement over time. Perhaps adding incentives for users to return to the application (like <a href="https://www.starbucks.com/starbucks-rewards"><span className="groupon-links">Starbucks Rewards</span></a>) would have driven user retention. One idea I would love to have implemented is that there would be a bot added as one of the contacts when a user first signs up and that bot could be the driver for a user to keep coming back to Moxtra. I’d like to think this bot could be similar to a friend telling you to check out a new app or a clothing line - prompting you to do so. <br></br><br></br>
              <span className="chunky-underline" id="groupon-underline-color">Despite the flaws, I took plenty away from this project that helped me to become a better designer and developer.</span> This internship gave me a solid grasp on the fundamentals of design and as a self-taught learner, this was invaluable to me. My manager taught me the iterative processes and organizing assets in Sketch which I still use in both in design and development today. <span className="chunky-underline" id="groupon-underline-color">Thank you, Moxtra!</span>
              </Media>
            </Col>
          </Row>
          <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header" id="groupon-secondary">key takeways</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  <ol className="takeaways">
                    <li>Don't be afraid to backtrack and try again.</li>
                    <li>Implementing dark mode is not as simple as it looks.</li>
                    <li>Expecting perfection is stupidity - strive for better and keep iterating.</li>
                  </ol><br></br><br></br>
                </Media>
              </Col>
            </Row>
        </Col>
    </Container>
    );
  }
};

export default GrouponReviewContent