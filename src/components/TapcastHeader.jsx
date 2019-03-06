import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';

import { Container, Row, Col, Badge } from 'reactstrap';

import Contact from './ContactBanner';

class TapcastHeader extends React.Component {
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
          <Col md="9" className="greetings" id="tapcast-greetings">
            <h1 className="headline" id="tapcast-headline">Reimagining a marketing intelligence platform</h1>
            <h6 className="secondary-header" id="tapcast-secondary">tapcast</h6>
          </Col>
        </Container>
    )
  }
}

export default TapcastHeader