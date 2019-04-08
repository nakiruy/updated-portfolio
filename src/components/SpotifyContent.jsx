import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardImg, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
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
              However, a couple of months later - as Spotify started rolling out the mode to real users - a plague of complaints flooded the internet.<br></br><br></br>
              <CardImg top width="100%" src="http://assets.yurika.design/spotify/complaintOne.png" className="proj-img"></CardImg><br></br><br></br> 
              <CardImg top width="100%" src="http://assets.yurika.design/spotify/complaintTwo.png" className="proj-img"></CardImg><br></br>
              <span className="img-caption">comments from spotify community</span> <br></br><br></br>
              Intrigued by the negative feedbacks, I decided to take on this challenge <span className="chunky-underline" id="spotify-underline-color">to improve the user experience of Spotify's car mode with a distraction-free, drivers-first interface</span>. 
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers spotify-color">02.</div> The Problem</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              {/* <br></br><br></br>  */}
              {/* <CardImg top width="100%" src={oldCarView1} className="proj-img" id="spotify-small-img"></CardImg><br></br> */}
              {/* <span className="img-caption">original spotify car mode</span> <br></br><br></br>  */}
              <Media body>
              As mentioned above, there were rampant reports of poor UX practices with Spotify's car mode. A handful of Android users in the <a href="https://community.spotify.com/"><span className="spotify-links">Spotify Community</span></a> even stated they'll leave for a competitor due to these issues. <span className="chunky-underline" id="spotify-underline-color">Clearly, not a good sign</span>.<br></br><br></br>
              I decided to consolidate reported issues to the most frequent mentions. Setting aside the buggy nature of car mode, here are the most common grievances as reported by the earliest adopters:<br></br><br></br>
              <ol className="spotify-painpoints">
                <li>Unable to select and jump through playlists from car mode interface</li>
                <li>Better playback controls - note: preferences of button sizes varied among users</li>
                <li>No option to turn off car mode from Settings</li>
              </ol> <br></br>
              Fortunately, solutions for items one and three were simple enough. An addition of voice functionality for playlist selections and an on/off toggle for Car Mode should solve those issues. However, a solution for issue two was not so apparent because of the wide variety of preferences.<br></br><br></br> 
              After brainstorming and testing out multiple sizes, it was evident that <span className="chunky-underline" id="spotify-underline-color">just simply making buttons bigger is not enough</span>. Instead, I determined that a hands-free, gesture-based would be sufficient to solve item two. This would mean that a user can control playback not only through tactile means but through gestural movements as well.
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers spotify-color">03.</div> The Process</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              As gesture-free control will be the core component of the application, it was essential to find an implementation method prior to building a user flow. Fortunately, I have some development experience so the first place I knew to search was <a href="https://github.com/"><span className="spotify-links">Github</span></a> and  <a href="https://stackoverflow.com/"><span className="spotify-links">StackOverflow</span></a>.<br></br><br></br>
              After some digging, I found a <a href="https://github.com/kritts/HandWave"><span className="spotify-links">perfect library</span></a> for this purpose. Essentially, this library allows developers to add hands-free capabilities to any Android apps by utilizing the front-facing camera of smartphones. Here is a video of the library’s capabilities for those interested:
              <div className="video-container">
                <iframe title="HandWave Video" width="400" height="300" src="https://www.youtube.com/embed/ws8UipMmJLE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              This library can add up to five gesture methods to any Android application: <span className="chunky-underline" id="spotify-underline-color">left</span> (by waving left), <span className="chunky-underline" id="spotify-underline-color">right</span> (by waving right), <span className="chunky-underline" id="spotify-underline-color">up</span> (by waving up), <span className="chunky-underline" id="spotify-underline-color">down</span> (by waving down), and <span className="chunky-underline" id="spotify-underline-color">selection</span> (by hovering a hand over the front camera). With methods established, I assigned each variable to an associated movement for this application:<br></br><br></br>
              <CardImg top width="100%" src="http://assets.yurika.design/spotify/spotifySketch.png" className="proj-img"></CardImg><br></br>
              <span className="img-caption">Assignment of gestures & quick mockup</span> <br></br><br></br>
              Then I proceeded with the onboarding...<br></br><br></br>
              <CardImg top width="100%" src="http://assets.yurika.design/spotify/spotifyWireframe.png" className="proj-img no-shadow"></CardImg><br></br>
              <span className="img-caption">Onboarding Wireframe</span> <br></br><br></br>
              At this point, I had a solid foundation. However, my wireframe lacked the capability for users to navigate through their playlists (i.e. to tackle problem one of early users). Fortunately, Spotify introduced <a href="https://support.spotify.com/us/listen_everywhere/voice_assistants/spotify-voice/"><span className="spotify-links">Spotify Voice</span></a> during the time of this project inception and I added extra screens to the above flow.<br></br><br></br> 
              <CardImg top width="100%" src="http://assets.yurika.design/spotify/spotifyVoiceAdd.png" className="proj-img no-shadow"></CardImg><br></br>
              <span className="img-caption">Spotify Voice Screens</span> <br></br><br></br>
              From there, it was all about putting pieces together.
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
                </div>
                To summarize, the final iteration of this project ensures that it is following the <a href="https://developer.spotify.com/branding-guidelines/"><span className="spotify-links">design guidelines</span></a> as outlined by Spotify. Also, as an extra touch, I decided to add an overall purple theme to visually separate this driving mode from the main view. Also, let's not forget the most critical component of the application...<br></br><br></br>
                <CardImg top width="100%" className="proj-img spotify-toggle" src="http://assets.yurika.design/spotify/spotifyToggle.png"></CardImg><br></br>
                <span className="img-caption">Pretty self-explanatory</span> <br></br><br></br>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers spotify-color">05.</div> The End</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
              To be frank, <span className="chunky-underline" id="spotify-underline-color">this might be my favorite project yet</span>. Recreating an existing feature on a large platform such as Spotify’s had its own challenges and tribulations but having a community of online users to receive feedback from helped facilitate the process. I enjoyed tackling early user problems from different angles and ultimately reach a solution that greatly differed from the initial implementation. Definitely got the creative juices flowing.<br></br><br></br>
              Another plus to taking on this project is that I had the chance <span className="chunky-underline" id="spotify-underline-color">to find a solution from the implementation level</span>. At the time of writing, I spend the majority of my days managing development sprints and crafting mockups and as a side effect, I haven’t looked from a developer’s perspective as much as I used to. This project served as a much-needed refresher for me.<br></br><br></br>
              Looking back, one major missing component of my version of driving mode is that there is no way to skip through a song (at least with gestures). Although there are only five gesture methods available from the library, I would imagine there would be a way to add that method and/or circumvent the limit by allowing for a combination of gestures as an. <br></br><br></br>
              Either way, I’m glad to have applied myself to this project.<br></br><br></br>
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
                  UPDATE: As of 2019, Spotify launched an <a href="https://www.theverge.com/2019/1/16/18185644/spotify-car-view-now-testing-android-simple-controls"><span className="spotify-links">updated Car View</span></a> and rumored to release a <a href="https://bgr.com/2019/01/18/spotify-in-car-music-player-details/"><span className="spotify-links">hardware device</span></a> to create a more hands-free experience by Q4 of 2019.
                </Media>
              </Col>
            </Row>
        </Col>
    </Container>
    );
  }
}

export default SpotifyContent