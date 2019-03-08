import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import AOS from 'aos';

class SpotifyContent extends React.Component {
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
        <Jumbotron className="spotify-projpic" fluid></Jumbotron>
        <CardGroup className="proj-brief" id="spotify-brief">
          <Card className="text-left" data-aos="fade-up">
            <CardBody>
              <CardTitle className="spotify-color">Role</CardTitle>
              <CardText>UI/UX, Research</CardText>
            </CardBody>
          </Card>
          <Card className="text-left" data-aos="fade-up">
            <CardBody>
              <CardTitle className="spotify-color">Duration</CardTitle>
              <CardText>Summer 2018</CardText>
            </CardBody>
          </Card>
          <Card className="text-left" data-aos="fade-up">
            <CardBody>
              <CardTitle className="spotify-color">Tools</CardTitle>
              <CardText>Sketch, InVision, Trello, Paper & Pen</CardText>
            </CardBody>
          </Card>
        </CardGroup>
        <Row>
            <Col>
              <div className="numbers" id="not-affiliated" data-aos="fade-up">
                Disclaimer: I am not affiliated with Spotify
              </div>
            </Col>
        </Row>
        <hr></hr>
        <Col className="spotify-process">
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers spotify-color">01.</div> The Beginning</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              When internet caught on that <a href="https://www.spotify.com/"><span className="spotify-links">Spotify</span></a> was testing a driving mode on their Android app in 2017, there was sizable anticipation for this new mode - allowing users to have a safer, music-listening experience on the go.<br></br><br></br>
              However, as Spotify started rolling out the mode to real users, a plague of complaints flooded the internet.<br></br><br></br>
              [ADD SCREENSHOTS OF USER COMPLAINTS BELOW]<br></br><br></br>
              https://community.spotify.com/t5/Android/Driving-Mode-Woes/td-p/4532127
              https://community.spotify.com/t5/Android/Stupid-Car-Mode/td-p/4530902<br></br><br></br>
              Intrigued by the negative feedbacks, I decided to take on this challenge <span className="chunky-underline" id="spotify-underline-color">to improve the user experience of Spotify's car mode with a distraction-free, drivers-first interface</span>. 
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers spotify-color">02.</div> The Challenge</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              Setting aside the buggy nature of car mode, there were quite a lot of experience issues to tackle. Here are some of the most common grievances as reported by the earliest adopters:<br></br><br></br>
              [ADD COMMON COMPLAINTS YOU TACKLED IN THE NEW ONBOARDING FLOW HERE]<br></br><br></br>
              [ADD SUMMARY + HANDS-FREE REASONING HERE]
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers spotify-color">03.</div> The Process</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              As gesture-free control will be the core component of the application, it was essential to find an implementation method prior to building a user flow. Fortunately, I have some development experience so the first place I knew to look was Github and StackOverflow.<br></br><br></br>
              After some digging, I found a <a href="https://github.com/kritts/HandWave"><span className="spotify-links">perfect library</span></a> for this purpose. Essentially, this Android library allows developers to add hands-free capabilities by taking advantage of the front-facing camera of smartphones. Here’s a video of the library’s capabilities for those interested:
              <div className="video-container">
                <iframe width="400" height="300" src="https://www.youtube.com/embed/ws8UipMmJLE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              This library can add up to five gesture methods to any Android application: left (by waving left), right (by waving right), up (by waving up), down (by waving down), and clicks (by hovering a hand over the front camera). Keeping that in mind, I sketched up a possible solution:<br></br><br></br>
              [ADD SKETCHES HERE]<br></br><br></br>
              Several sketches later…<br></br><br></br>
              [ADD INITAL MOCKUPS]<br></br><br></br>
              At this point, I had a solid foundation. However, I needed a capability for a user to navigate through their playlists and add support for other features that comes native with Spotify. Fortunately, Spotify introduced Spotify Voice during the time of this project inception.<br></br><br></br> 
              With voice control added:<br></br><br></br>
              [ADD MOCKUP WITH SPOTIFY VOICE]
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers spotify-color">04.</div> The Solution</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <div className="center">
                  <iframe width="424" height="916" src="//invis.io/GUQVGDOEHZD" frameBorder="0" allowFullScreen></iframe>
                </div><br></br><br></br>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers spotify-color">05.</div> The End</h6>
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
}

export default SpotifyContent