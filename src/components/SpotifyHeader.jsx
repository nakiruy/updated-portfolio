import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';

import { Container, Row, Col, Badge } from 'reactstrap';

import Contact from './ContactBanner';

class SpotifyHeader extends React.Component {
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
        <Container data-aos="fade-up"> 
          <Col md="9" className="greetings" id="spotify-greetings">
            <h1 className="headline" id="spotify-headline">Controlling your driving music through gestures</h1>
            <h6 className="secondary-header" id="spotify-secondary">spotify</h6>
          </Col>
        </Container>
    )
  }
}

export default SpotifyHeader