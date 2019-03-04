import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';

const SpotifyContent = () => {
  return (
    <Container>
      <Jumbotron className="spotify-projpic" fluid>
      </Jumbotron>
      <CardGroup className="proj-brief" id="spotify-brief">
        <Card className="text-left">
          <CardBody>
            <CardTitle className="spotify-color">Role</CardTitle>
            <CardText>UI/UX, Research</CardText>
          </CardBody>
        </Card>
        <Card className="text-left">
          <CardBody>
            <CardTitle className="spotify-color">Duration</CardTitle>
            <CardText>Summer 2018</CardText>
          </CardBody>
        </Card>
        <Card className="text-left">
          <CardBody>
            <CardTitle className="spotify-color">Tools</CardTitle>
            <CardText>Sketch, InVision, Trello, Paper & Pen</CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <hr></hr>
      <Col className="spotify-process">
        <Row>
          <Col lg="4">
            <h6 className="secondary-header process-heading">01. The Beginning</h6>
          </Col>
          <Col lg="8">
            <Media body>
            When internet caught on <a href="https://www.spotify.com/"><span className="spotify-links">Spotify</span></a> was testing a driving mode on their Android app back in 2017, there was sizable anticipation for the new mode which allows for a safer, music-listening experience. However, as Spotify started rolling out the mode to real users, a plague of complaints flooded the internet.
            [ADD SCREENSHOTS OF USER COMPLAINTS BELOW]
            https://community.spotify.com/t5/Android/Driving-Mode-Woes/td-p/4532127
            https://community.spotify.com/t5/Android/Stupid-Car-Mode/td-p/4530902
            Intrigued by the negative feedbacks, I had to take on this challenge to improve the user experience while still accomplishing the goal for a distraction-free driving interface. 
            </Media>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h6 className="secondary-header process-heading">02. The Challenge</h6>
          </Col>
          <Col lg="8">
            <Media body>
            Setting aside the buggy nature of car mode, there were quite a lot of experience issues to tackle. Here are some of the most common grievances as reported by the earliest adopters: 
            [ADD COMMON COMPLAINTS YOU TACKLED IN THE NEW ONBOARDING FLOW HERE]
            [ADD SUMMARY + HANDS-FREE REASONING HERE]
            </Media>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h6 className="secondary-header process-heading">03. The Process</h6>
          </Col>
          <Col lg="8">
            <Media body>
            As gesture-free control will be the core component of the application, it was essential to find a method of implementation prior to building a user flow. Fortunately, I have development experience so the first place I knew to look was Github and StackOverflow. After some digging, I found a perfect library for this purpose (https://github.com/kritts/HandWave). Essentially, this Android library allows developers to add hands-free capabilities by taking advantage of the front-facing camera of smartphones. Here’s a video of the library’s capabilities for those interested:
            [ADD HANDWAVE VIDEO CAPABILITY VIDEO HERE]
            This library can add up to five gesture methods to any Android application: left (by waving left), right (by waving right), up (by waving up), down (by waving down), and clicks (by hovering a hand over the front camera). Keeping that in mind, I sketched up a possible solution: 
            [ADD SKETCHES HERE]
            Several sketches later…
            [ADD INITAL MOCKUPS]
            At this point, I had a solid foundation. However, I needed a capability for a user to navigate through their playlists and add support for other features that comes native with Spotify. Fortunately, Spotify introduced Spotify Voice during the time of this project inception. 
            With voice control added:
            [ADD MOCKUP WITH SPOTIFY VOICE]
            </Media>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h6 className="secondary-header process-heading">04. The Solution</h6>
          </Col>
          <Col lg="8">
            <Media body>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h6 className="secondary-header process-heading">05. The End</h6>
          </Col>
          <Col lg="8">
            <Media body>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Col>
        </Row>
      </Col>
  </Container>
  );
};

export default SpotifyContent