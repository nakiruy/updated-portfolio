import React from 'react';

import { Container } from 'reactstrap';
import ScrollToTop from 'react-scroll-up';

class ScrollUpButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let dynamicId;

    if (window.location.pathname === "/projects/tapcastplatform") {
      dynamicId = "tapcast-scroll-up";
    } else if (window.location.pathname === "/projects/moxtra") {
      dynamicId = "moxtra-scroll-up";
    } else if (window.location.pathname === "/projects/spotify") {
      dynamicId = "spotify-scroll-up";
    } else if (window.location.pathname === "/projects/tapcastbilling") {
      dynamicId = "tapcast-billing-scroll-up";
    } else if (window.location.pathname === "/reviews/groupon") {
      dynamicId = "groupon-scroll-up";
    }

    return (
        <Container className="scroll-up">
          <ScrollToTop showUnder={200}>
            <span className="scroll-up-btn" id={dynamicId}></span>
          </ScrollToTop>
        </Container>
    )
  }
}

export default ScrollUpButton