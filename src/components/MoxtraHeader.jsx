import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';

import { Container, Row, Col, Badge } from 'reactstrap';

import Contact from './ContactBanner';

class MoxtraHeader extends React.Component {
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
          <Col md="9" className="greetings" id="moxtra-greetings">
            <h1 className="headline" id="moxtra-headline">Introducing a new mode of business communication</h1>
            <h6 className="secondary-header" id="moxtra-secondary">moxtra</h6>
            {/* Objective: Enhancing onboarding flow */}
          </Col>
        </Container>
    )
  }
}

export default MoxtraHeader