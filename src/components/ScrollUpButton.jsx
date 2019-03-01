import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Row, Col, Badge } from 'reactstrap';
import ScrollToTop from 'react-scroll-up';

class ScrollUpButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Container className="scroll-up">
          <ScrollToTop showUnder={160}>
            <span>UP</span>
          </ScrollToTop>
        </Container>
    )
  }
}

export default ScrollUpButton