import React from 'react';
import { Media, Col, Row, Jumbotron, Container } from 'reactstrap';
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
                According to their <a href="https://s22.q4cdn.com/731250486/files/doc_downloads/2019/Q1-2019-Fact-Sheet_Final.pdf"><span className="groupon-links">Q1 2019 Fact Sheet</span></a>...<br></br><br></br>
                <ul className="takeaways" id="groupon-consideration">
                    <li>47.2 million active users</li>
                    <li>20% of user traffic from desktop</li>
                    <li>Their main demographic are college-educated, urban women ranging from ages 25 to 44 (<a href="https://www.feedough.com/how-does-groupon-make-money-groupon-business-model/"><span className="groupon-links">source</span></a>)</li>
                    <li>Primary users - subscribers using Groupon to purchase discounted goods, services, etc.</li>
                    <li>Secondary users - local businesses listing goods, services, etc. on the website</li>
                    <li>Generates revenue through commissions for every customer referred to merchant</li>
                  </ul><br></br><br></br>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>Considerations</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                  <ul className="takeaways" id="groupon-consideration">
                    <li><b>Usability.</b></li>
                    <li><b>Clarity.</b></li>
                    <li><b>UX.</b></li>
                    <li><b>Effectiveness.</b></li>
                    <li><b>Feedback.</b></li>
                  </ul><br></br><br></br>
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
                    src: 'https://assets.yurika.design/groupon-ui.png',
                    alt: 'Groupon UI',
                    className: 'proj-img no-shadow',
                    style: { width: '100%' }
                  }}
                  zoomImage={{
                    src: 'https://assets.yurika.design/groupon-ui.png',
                    alt: 'Groupon UI',
                  }}
                /><br></br>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers groupon-color"> </div>Accessibility</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <ImageZoom
                  image={{
                    src: 'https://assets.yurika.design/groupon-wcag-rating.png',
                    alt: 'Groupon UI',
                    className: 'proj-img no-shadow',
                    style: { width: '100%' }
                  }}
                  zoomImage={{
                    src: 'https://assets.yurika.design/groupon-wcag-rating.png',
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
                <ul className="takeaways" id="groupon-consideration">
                    <li><b>Usability.</b> Is it easy to use? </li>
                    <li><b>Clarity.</b> Is it clear?</li>
                    <li><b>UX.</b> Is it pleasant to use?</li>
                    <li><b>Effectiveness.</b> Is it solving user problems efficiently?</li>
                    <li><b>Feedback.</b> Is it communicating successes and/or failures to its users?</li>
                  </ul><br></br><br></br>
              </Media>
            </Col>
          </Row>
        </Col>
    </Container>
    );
  }
};

export default GrouponReviewContent