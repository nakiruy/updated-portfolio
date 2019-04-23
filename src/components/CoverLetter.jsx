import React from 'react';

import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import Footer from './Footer';

class CoverLetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
      <Container className="not-found">
        <Navigation />
        <h1 className="headline" id="not-header">Cover Letter<span id="period">.</span></h1>
      </Container>
      <Container className="footer" fluid>
        <Footer />
      </Container>
      </div>
    )
  }
}

export default CoverLetter