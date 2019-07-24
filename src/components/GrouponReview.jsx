import React from 'react';

import { Container } from 'reactstrap';
import AOS from 'aos';

import Navigation from './Navigation';
import GrouponReviewHeader from './GrouponReviewHeader';
import GrouponReviewContent from './GrouponReviewContent';
import ScrollUpButton from './ScrollUpButton';
import Footer from './Footer';


class GrouponReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
    window.scrollTo(0, 0);
  }

  render() {
    return (
    <div>
      <Container className="groupon-review">
        <Navigation />
        <div data-aos="fade-up">
          <GrouponReviewHeader />
        </div>
        <GrouponReviewContent />
      </Container>
      <Container className="footer" fluid>
        <ScrollUpButton />
        <Footer />
      </Container>
    </div>
    )
  }
}

export default GrouponReview