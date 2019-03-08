import React from 'react';
import { Container, Col } from 'reactstrap';
import AOS from 'aos';

import TapcastJumbo from './TapcastJumbo';
import MoxtraJumbo from './MoxtraJumbo';
import SpotifyJumbo from './SpotifyJumbo';

class AllProjects extends React.Component {
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
        <Container className="allProjects">
          <Col className="projects">
            {/* <h1 className="headline" id="project-headline">Projects.</h1> */}
            <div data-aos="fade-up">
              <TapcastJumbo />
            </div>
            <div data-aos="fade-up">
              <MoxtraJumbo />
            </div>
            <div data-aos="fade-up">
              <SpotifyJumbo />
            </div>
            {/* <h6 className="secondary-header" id="contact-header">get in touch</h6> */}
          </Col>
        </Container>
    )
  }
}

export default AllProjects