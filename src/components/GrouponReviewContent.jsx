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
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>Considerations</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <Media body>
                  <ul className="takeaways" id="groupon-consideration">
                    <li><b>Usability.</b> Is it easy to use? </li>
                    <li><b>Clarity.</b> Is it clear?</li>
                    <li><b>UX.</b> Is it pleasant to use?</li>
                    <li><b>Effectiveness.</b> Is it solving user problems efficiently?</li>
                    <li><b>Feedback.</b> Is it communicating successes and/or failures to its users?</li>
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
                <iframe src="https://player.vimeo.com/video/343515349?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0&muted=1" width="100%" height="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>Onboarding</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <iframe src="https://player.vimeo.com/video/343351917?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0&muted=1" width="100%" height="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe><br></br><br></br> 
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>Structure</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <iframe src="https://player.vimeo.com/video/343537960?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0&muted=1" width="100%" height="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe><br></br><br></br> 
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>Search</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <iframe src="https://player.vimeo.com/video/343539607?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0&muted=1" width="100%" height="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe><br></br><br></br> 
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>Product Page</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <iframe src="https://player.vimeo.com/video/343533654?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0&muted=1" width="100%" height="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe><br></br><br></br> 
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>Add to Cart</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <iframe src="https://player.vimeo.com/video/343546449?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0&muted=1" width="100%" height="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe><br></br><br></br> 
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>UI / Interaction Design</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <iframe src="https://player.vimeo.com/video/343543924?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0&muted=1" width="100%" height="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe><br></br><br></br> 
                <ImageZoom
                  image={{
                    src: 'http://assets.yurika.design/groupon-ui.png',
                    alt: 'Groupon UI',
                    className: 'proj-img no-shadow',
                    style: { width: '100%' }
                  }}
                  zoomImage={{
                    src: 'http://assets.yurika.design/groupon-ui.png',
                    alt: 'Groupon UI',
                  }}
                /><br></br>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>Final Thoughts</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              <span className="chunky-underline" id="groupon-underline-color">As my first independent design project, there are a slew of items I would change if I were to tackle this problem now.</span> For example, the icons are notably too rounded for a business application. Sharper edges for this icon library would have been better suited for this visual representation of a business like Moxtra’s. 
              Using fewer variants of colors would have also helped this application to look more “serious”. In terms of user flow, adding a way to keep user engagement <span className="chunky-underline" id="groupon-underline-color">after</span> the user leaves the application would have increased user engagement over time. Perhaps adding incentives for users to return to the application (like <a href="https://www.starbucks.com/starbucks-rewards"><span className="groupon-links">Starbucks Rewards</span></a>) would have driven user retention. One idea I would love to have implemented is that there would be a bot added as one of the contacts when a user first signs up and that bot could be the driver for a user to keep coming back to Moxtra. I’d like to think this bot could be similar to a friend telling you to check out a new app or a clothing line - prompting you to do so. <br></br><br></br>
              <span className="chunky-underline" id="groupon-underline-color">Despite the flaws, I took plenty away from this project that helped me to become a better designer and developer.</span> This internship gave me a solid grasp on the fundamentals of design and as a self-taught learner, this was invaluable to me. My manager taught me the iterative processes and organizing assets in Sketch which I still use in both in design and development today. <span className="chunky-underline" id="groupon-underline-color">Thank you, Moxtra!</span>
              </Media>
            </Col>
          </Row>
        </Col>
    </Container>
    );
  }
};

export default GrouponReviewContent