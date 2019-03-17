import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardImg, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import AOS from 'aos';

import complaintOne from '../assets/spotify/complaintOne.png';
import complaintTwo from '../assets/spotify/complaintTwo.png';
import oldCarView1 from '../assets/spotify/oldCarView1.jpg';

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
              However, couple months later - as Spotify started rolling out the mode to real users - a plague of complaints flooded the internet.<br></br><br></br>
              <CardImg top width="100%" src={complaintOne} className="proj-img"></CardImg><br></br><br></br> 
              <CardImg top width="100%" src={complaintTwo} className="proj-img"></CardImg><br></br>
              <span className="img-caption">comments from spotify community</span> <br></br><br></br>
              Intrigued by the negative feedbacks, I decided to take on this challenge <span className="chunky-underline" id="spotify-underline-color">to improve the user experience of Spotify's car mode with a distraction-free, drivers-first interface</span>. 
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers spotify-color">02.</div> The Challenge</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              {/* <br></br><br></br>  */}
              {/* <CardImg top width="100%" src={oldCarView1} className="proj-img" id="spotify-small-img"></CardImg><br></br> */}
              {/* <span className="img-caption">original spotify car mode</span> <br></br><br></br>  */}
              <Media body>
              As alluded to above, there were rampant reports of poor UX practices with Spotify's car mode. Besides the buggy nature of car mode, here are the most common grievances as reported by the earliest adopters:<br></br><br></br>
              <ol className="spotify-painpoints">
                <li>Unable to select and jump through playlists from car mode interface</li>
                <li>Better playback controls - preferences of button sizes varied among users</li>
                <li>No option to turn off car mode from Settings</li>
              </ol> <br></br>
              Taking user problems into consideration, I sketched and mapped out some ideas to solve above problems. <br></br><br></br> 
              [ADD SKETCHES HERE] <br></br><br></br> 
              From multiple iteration of sketches and feedback from others, it was clear that addition of voice functionality and a toggle for Car Mode will solve issues 1 and 3. However, a solution for issue 2 was not so apparent.<br></br><br></br> 
              With further input from others, it was evident that <span className="chunky-underline" id="spotify-underline-color">just simply making buttons bigger is not enough</span>. 
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers spotify-color">03.</div> The Process</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              As gesture-free control will be the core component of the application, it was essential to find an implementation method prior to building a user flow. Fortunately, I have some development experience so the first place I knew to look was <a href="https://github.com/"><span className="spotify-links">Github</span></a> and  <a href="https://stackoverflow.com/"><span className="spotify-links">StackOverflow</span></a>.<br></br><br></br>
              After some digging, I found a <a href="https://github.com/kritts/HandWave"><span className="spotify-links">perfect library</span></a> for this purpose. Essentially, this Android library allows developers to add hands-free capabilities by taking advantage of the front-facing camera of smartphones. Here’s a video of the library’s capabilities for those interested:
              <div className="video-container">
                <iframe title="HandWave Video" width="400" height="300" src="https://www.youtube.com/embed/ws8UipMmJLE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              This library can add up to five gesture methods to any Android application: <span className="chunky-underline" id="spotify-underline-color">left</span> (by waving left), <span className="chunky-underline" id="spotify-underline-color">right</span> (by waving right), <span className="chunky-underline" id="spotify-underline-color">up</span> (by waving up), <span className="chunky-underline" id="spotify-underline-color">down</span> (by waving down), and <span className="chunky-underline" id="spotify-underline-color">selection</span> (by hovering a hand over the front camera). Keeping that in mind, I sketched up a possible solution:<br></br><br></br>
              [ADD SKETCHES HERE]<br></br><br></br>
              Several sketches later…<br></br><br></br>
              [ADD INITAL MOCKUPS]<br></br><br></br>
              At this point, I had a solid foundation. However, I needed a capability for a user to navigate through their playlists and add support for other features that comes native with Spotify. Fortunately, Spotify introduced <a href="https://support.spotify.com/us/listen_everywhere/voice_assistants/spotify-voice/"><span className="spotify-links">Spotify Voice</span></a> during the time of this project inception.<br></br><br></br> 
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
                <div className="center" id="spotify-prototype">
                  <iframe title="Spotify Car Mode Prototype" className="spotify-prototype" width="424" height="916" src="//invis.io/GUQVGDOEHZD" frameBorder="0" allowFullScreen></iframe>
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
          <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header" id="spotify-secondary">key takeways</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  <ol className="takeaways">
                    <li>Starting a project off from an implementation method can go a long way.</li>
                    <li>Address user concerns and when possible, be creative with those solutions.</li>
                    <li>Reminder: Always provide users a way to opt out from the flow.</li>
                  </ol>
                </Media>
              </Col>
            </Row>
            <Row>
              <Col data-aos="fade-up">
                <Media body>
                  Update: As of 2019, Spotify launched an <a href="https://www.theverge.com/2019/1/16/18185644/spotify-car-view-now-testing-android-simple-controls"><span className="spotify-links">updated Car View</span></a> and rumored to release a <a href="https://bgr.com/2019/01/18/spotify-in-car-music-player-details/"><span className="spotify-links">hardware device</span></a> to create a more hands-free experience by Q4 of 2019.
                </Media>
              </Col>
            </Row>
        </Col>
    </Container>
    );
  }
}

export default SpotifyContent