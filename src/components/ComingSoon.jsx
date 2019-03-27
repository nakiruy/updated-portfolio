import React from 'react';

import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import Footer from './Footer';

class ComingSoon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
      <Container className="not-found" id="coming-soon">
        <Navigation />
        <h1 className="headline" id="not-header">Coming Soon<span id="period">.</span></h1>
        <Link exact to="/"><span className="btn" id="btn-home">Go Home</span></Link>
      </Container>
      <Container className="footer" fluid>
        <Footer />
      </Container>
    </div>
    )
  }
}

export default ComingSoon